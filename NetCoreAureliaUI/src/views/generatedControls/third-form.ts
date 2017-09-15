import { autoinject, inject, NewInstance } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { $ } from 'jquery';
import { RefData } from './refData';
import { ElementEnum, FieldIdentifiers, FormField } from '../../models/index';
import { ValidationController, ValidationRules, FluentRules, FluentRuleCustomizer } from 'aurelia-validation';
import { BootstrapFormValidationRenderer } from '../../utils/bootstrap-form-validation-renderer';
import { log } from '../../utils/index';


@inject(NewInstance.of(ValidationController))
export class ThirdForm {
    validationRules: any;

    fullData: any;
    fieldIdentifier: any[]; // ["FieldId", "Name", "MaxLength", "ElementId", "ListId"]
    fieldValuesArr: any[]; // [ ["432", "System Number", "4", "13", null], ... ]
    fieldLists: any[];
    fields;

    // positions
    posFieldId;
    posFieldName;
    posFieldValue;
    posFieldMaxLength;
    posFieldElementId;
    posFieldListId;
    ElementEnum;

    formFields: FormField[];

    constructor(private controller: ValidationController) {
        log.debug("constructor called");
        this.controller.addRenderer(new BootstrapFormValidationRenderer());

        this.fullData = RefData.fields;

        // Find field identifiers and their values array
        this.fieldIdentifier = this.fullData.fields[0];
        this.SetPositionOfFields();
        // read data to put in object of kind default template
        this.fieldLists = [];
        this.fullData.fieldLists[1].forEach((val, index, array) => {
            this.fieldLists.push({
                'Id': val[0],
                'Name': val[2],
                'Value': val[1] || val[2]
            });
        });

        this.formFields = [];
        this.fullData.fields[1].forEach((val, index, array) => {
            var formField = new FormField();
            formField.fieldId = val[this.posFieldId];
            formField.elementId = val[this.posFieldElementId];
            formField.text = val[this.posFieldName];

            if (this.posFieldListId) {
                formField.list = this.fieldLists.filter((v) => {
                    if (v['Id'] == val[this.posFieldListId]) {
                        return true;
                    }
                });
                formField.textValueInList = { text: 'Name', value: 'Value' };
            }

            if (this.posFieldValue > 0) {
                formField.value = val[this.posFieldValue];
            }

            if (val[this.posFieldMaxLength]) {
                try {
                    formField.validation.maxLength = parseInt(val[this.posFieldMaxLength]);
                } catch (e) {
                    throw "max length value:" + [this.posFieldMaxLength] + " is not parseable to integer for field name " + formField.text;
                }
            }

            this.formFields.push(formField);
        });

        this.ElementEnum = ElementEnum;

        this.formFields.forEach((value, index, array) => {
            this.controller.addObject(value, value.createValidationRules());
        });
    }

    activate() {
        log.debug("activate called");
    }
    created(owningView, myView) {
        log.debug("created called");
    }
    bind(bindingContext, overrideContext) {
        log.debug("bind called");
    }
    attached() {
        log.debug("attached called");
    }
    deactivate() {
        log.debug("deactivate called");
    }
    detached() {
        log.debug("detached called");
    }
    unbind() {
        log.debug("unbind called");
    }

    SetPositionOfFields() {
        if (this.fieldIdentifier) {
            this.posFieldId = this.fieldIdentifier.indexOf(FieldIdentifiers.Id);
            this.posFieldName = this.fieldIdentifier.indexOf(FieldIdentifiers.Name);
            this.posFieldValue = this.fieldIdentifier.indexOf(FieldIdentifiers.Value);
            this.posFieldMaxLength = this.fieldIdentifier.indexOf(FieldIdentifiers.MaxLength);
            this.posFieldElementId = this.fieldIdentifier.indexOf(FieldIdentifiers.ElementId);
            this.posFieldListId = this.fieldIdentifier.indexOf(FieldIdentifiers.ListId);
        }
        else {
            log.debug('fieldIdentifier is not initailized');
        }

    }

    callDebugger() {
        this.controller.validate()
            .then(result => {
                if (result.valid) {
                    alert('all controls validated correctly');
                }
            });
    }

    save() {
        this.controller.validate()
            .then(result => {
                if (result.valid) {

                }
            });

    }


}



