import { ElementEnum } from './element-enum';
import { ValidationRules } from 'aurelia-validation';

export class FormField {
    fieldId: number; // helpful when submitting form 
    name: string; // fieldName
    value: any; // user entered or from db
    text: string; // label text
    disabled: boolean;
    elementId: ElementEnum;
    listId: number | string | Array<any>; // for finding dropdown values if element is dropdown
    validation: any | {
        required: boolean;
        maxLength: null | number;
        minLength: null | number;
        email: boolean;
    }

    createValidationRules() {
        if (this.hasValidationRule()) {

            return ValidationRules.ensure<FormField, any>(x => x.value)
                .required() //.when(x => x.validation && x.validation.required)
                .email().when(x => x.validation && x.validation.email)
                .maxLength(this.validation.maxLength).when(x => x.validation && x.validation.maxLength)
                .minLength(this.validation.maxLength).when(x => x.validation && x.validation.minLength)
                .rules;
        }
    }

    hasValidationRule(): boolean {
        // TODO: check if validation exist for this form field
        //if (this && this.validation && this.)
        return true;
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
