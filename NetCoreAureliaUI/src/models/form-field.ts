import { ElementEnum } from './element-enum';
import { ValidationRules } from 'aurelia-validation';

export class FormField {
    fieldId: number; // helpful when submitting form 
    name: string; // fieldName
    value: any; // user entered or from db
    text: string; // label text
    disabled: boolean;
    elementId: ElementEnum;

    // dropdown related fields
    listId: number | string; // donot use this field if using list field. // for finding dropdown values if element is dropdown
    list: Array<any>; // either use listId or list, in this sample app. first form and second form uses listId whereas third form used list.
    textValueInList: any; //{ text: 'Name', value: 'Value' }; // for dropdowns default template read data from an object properties named as text and value.

    validation: {
        required: boolean;
        maxLength: null | number;
        minLength: null | number;
        email: boolean;
    } | any;

    constructor() {
        this.validation = {}; // Initialize validation object
    }

    createValidationRules() {
        if (this.hasValidationRule()) {

            return ValidationRules.ensure<FormField, any>(x => x.value)
                .required().when(x => x.validation && x.validation.required)
                .email().when(x => x.validation && x.validation.email)
                .maxLength(this.validation.maxLength).when(x => x.validation && x.validation.maxLength && typeof x.value == "string")
                .minLength(this.validation.maxLength).when(x => x.validation && x.validation.minLength && typeof x.value == "string")
                .rules;
        }
    }

    hasValidationRule(): boolean {
        // TODO: check if validation exist for this form field
        //if (this && this.validation && this.)
        if( this.validation && Object.keys( this.validation ).length > 0 )
            return true;
        else
            return false;
    }

    isRequired(): boolean {
        // check if form field is required
        if (this && this.validation && this.validation.required)
            return true;
        return false;
    }

    isEmail(): boolean {
        // check if form field is email
        if (this && this.validation && this.validation.email)
            return true;
        return false;
    }

    isMaxLength(): boolean {
        // check if form field is email
        if (this && this.validation && this.validation.maxLength)
            return true;
        return false;
    }

    isMinLength(): boolean {
        // check if form field is email
        if (this && this.validation && this.validation.minLength)
            return true;
        return false;
    }
}
