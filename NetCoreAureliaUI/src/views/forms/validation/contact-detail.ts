import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController, ValidationRules } from 'aurelia-validation';
import { Router, RouterConfiguration } from 'aurelia-router';

import { BootstrapFormValidationRenderer } from '../../../utils/bootstrap-form-validation-renderer';

interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;

}

@inject(NewInstance.of(ValidationController))
export class ContactDetail {
    routeConfig: any;
    contact: Contact;
    originalContact: Contact;
    contactRules: any;

    constructor(private controller: ValidationController, ) {
        this.controller.addRenderer(new BootstrapFormValidationRenderer());
    }

    createValidationRules() {
        return ValidationRules.ensure<Contact, any>(x => x.email)
            .required().email().rules;
    }

    bind() {
        console.log("bind called");
    }

    unBind() {
        console.log("unBind called");
    }

    attached() {
        console.log("attached called");
    }

    detached() {
        console.log("detached called");
    }

    activate(params, routeConfig) {
        console.log("activate called");
        this.contact = <Contact>{};
        this.controller.addObject(this.contact, this.createValidationRules());
    }

    get canSave() {
        return true;
    }

    save() {
        this.controller.validate()
            .then(result => {
                if (result.valid) {
                    console.log("save success");
                }
                else {
                    console.log("save fail");
                }
            });
    }

    canDeactivate() {
        console.log("canDeactivate called");
        return true;
    }
}
