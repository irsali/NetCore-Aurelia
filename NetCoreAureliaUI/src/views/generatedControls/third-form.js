var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./refData", "../../models/index", "aurelia-validation", "../../utils/bootstrap-form-validation-renderer", "../../utils/index"], function (require, exports, aurelia_framework_1, refData_1, index_1, aurelia_validation_1, bootstrap_form_validation_renderer_1, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ThirdForm = (function () {
        function ThirdForm(controller) {
            var _this = this;
            this.controller = controller;
            index_2.log.debug("constructor called");
            this.controller.addRenderer(new bootstrap_form_validation_renderer_1.BootstrapFormValidationRenderer());
            this.fullData = refData_1.RefData.fields;
            this.fieldIdentifier = this.fullData.fields[0];
            this.SetPositionOfFields();
            this.fieldLists = [];
            this.fullData.fieldLists[1].forEach(function (val, index, array) {
                _this.fieldLists.push({
                    'Id': val[0],
                    'Name': val[2],
                    'Value': val[1] || val[2]
                });
            });
            this.formFields = [];
            this.fullData.fields[1].forEach(function (val, index, array) {
                var formField = new index_1.FormField();
                formField.fieldId = val[_this.posFieldId];
                formField.elementId = val[_this.posFieldElementId];
                formField.text = val[_this.posFieldName];
                if (_this.posFieldListId) {
                    formField.list = _this.fieldLists.filter(function (v) {
                        if (v['Id'] == val[_this.posFieldListId]) {
                            return true;
                        }
                    });
                    formField.textValueInList = { text: 'Name', value: 'Value' };
                }
                if (_this.posFieldValue > 0) {
                    formField.value = val[_this.posFieldValue];
                }
                if (val[_this.posFieldMaxLength]) {
                    try {
                        formField.validation.maxLength = parseInt(val[_this.posFieldMaxLength]);
                    }
                    catch (e) {
                        throw "max length value:" + [_this.posFieldMaxLength] + " is not parseable to integer for field name " + formField.text;
                    }
                }
                _this.formFields.push(formField);
            });
            this.ElementEnum = index_1.ElementEnum;
            this.formFields.forEach(function (value, index, array) {
                _this.controller.addObject(value, value.createValidationRules());
            });
        }
        ThirdForm.prototype.activate = function () {
            index_2.log.debug("activate called");
        };
        ThirdForm.prototype.created = function (owningView, myView) {
            index_2.log.debug("created called");
        };
        ThirdForm.prototype.bind = function (bindingContext, overrideContext) {
            index_2.log.debug("bind called");
        };
        ThirdForm.prototype.attached = function () {
            index_2.log.debug("attached called");
        };
        ThirdForm.prototype.deactivate = function () {
            index_2.log.debug("deactivate called");
        };
        ThirdForm.prototype.detached = function () {
            index_2.log.debug("detached called");
        };
        ThirdForm.prototype.unbind = function () {
            index_2.log.debug("unbind called");
        };
        ThirdForm.prototype.SetPositionOfFields = function () {
            if (this.fieldIdentifier) {
                this.posFieldId = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.Id);
                this.posFieldName = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.Name);
                this.posFieldValue = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.Value);
                this.posFieldMaxLength = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.MaxLength);
                this.posFieldElementId = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.ElementId);
                this.posFieldListId = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.ListId);
            }
            else {
                index_2.log.debug('fieldIdentifier is not initailized');
            }
        };
        ThirdForm.prototype.callDebugger = function () {
            this.controller.validate()
                .then(function (result) {
                if (result.valid) {
                    alert('all controls validated correctly');
                }
            });
        };
        ThirdForm.prototype.save = function () {
            this.controller.validate()
                .then(function (result) {
                if (result.valid) {
                }
            });
        };
        return ThirdForm;
    }());
    ThirdForm = __decorate([
        aurelia_framework_1.inject(aurelia_framework_1.NewInstance.of(aurelia_validation_1.ValidationController)),
        __metadata("design:paramtypes", [aurelia_validation_1.ValidationController])
    ], ThirdForm);
    exports.ThirdForm = ThirdForm;
});
//# sourceMappingURL=third-form.js.map