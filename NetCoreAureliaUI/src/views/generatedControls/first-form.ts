import { Router, RouterConfiguration } from 'aurelia-router';
import { $ } from 'jquery';
import { RefData } from './refData';
import { ElementEnum, FieldIdentifiers } from '../../models/index';
import { ValidationController, ValidationRules } from 'aurelia-validation';
import {BootstrapFormValidationRenderer} from '../../utils/bootstrap-form-validation-renderer';


export class FirstForm {

    fullData: any;
    fieldIdentifier: any[]; // ["FieldId", "Name", "MaxLength", "ElementId", "ListId"]
    fieldValuesArr: any[]; // [ ["432", "System Number", "4", "13", null], ... ]
    fieldLists: any[];
    fields;
    watermarkText = "Select";
    multiSelectShowCheckbox = true;

    cwidth;

    // positions
    posFieldId;
    posFieldName;
    posFieldMaxLength;
    posFieldElementId;
    posFieldListId;
    ElementEnum;

    constructor() {
        this.cwidth = "100%";

        this.fullData = RefData.fields;

        // Find field identifiers and their values array
        this.fieldIdentifier = this.fullData.fields[0];
        this.fieldValuesArr = this.fullData.fields[1];

        // for dropdowns default template read data from an object properties named as text and value.
        this.fields = { text: 'Name', value: 'Value' };

        // read data put in object of kind default template
        var tempFieldLists: any[] = this.fullData.fieldLists[1];
        this.fieldLists = [];
        tempFieldLists.forEach((val, index, array) => {
            this.fieldLists.push({
                'Id': val[0],
                'Name': val[2],
                'Value': val[1] || val[2]
            });
        });
        
        this.SetPositionOfFields();
        this.ElementEnum = ElementEnum;
    }

    filterDataForDropdown(listId) {
        return this.fieldLists.filter((v) => {
            if (v['Id'] == listId) {
                return true;
            }
        });
    }

    SetPositionOfFields() {
        if (this.fieldIdentifier) {
            this.posFieldId = this.fieldIdentifier.indexOf(FieldIdentifiers.Id);
            this.posFieldName = this.fieldIdentifier.indexOf(FieldIdentifiers.Name);
            this.posFieldMaxLength = this.fieldIdentifier.indexOf(FieldIdentifiers.MaxLength);
            this.posFieldElementId = this.fieldIdentifier.indexOf(FieldIdentifiers.ElementId);
            this.posFieldListId = this.fieldIdentifier.indexOf(FieldIdentifiers.ListId);
        }
        else {
            console.log('fieldIdentifier is not initailized');
        }

    }

    callDebugger() {
        debugger;
    }

}

