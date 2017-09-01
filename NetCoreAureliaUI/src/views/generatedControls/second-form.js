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
    var SecondForm = (function () {
        function SecondForm(controller) {
            var _this = this;
            this.controller = controller;
            this.watermarkText = "Select";
            this.multiSelectShowCheckbox = true;
            this.fileSaveUrl = "http://mvc.syncfusion.com/Services/FileUpload/UploadBox/saveFiles";
            this.fileRemoveUrl = "http://mvc.syncfusion.com/Services/FileUpload/UploadBox/removeFiles";
            index_2.log.debug("constructor called");
            this.controller.addRenderer(new bootstrap_form_validation_renderer_1.BootstrapFormValidationRenderer());
            this.cwidth = "100%";
            this.fullData = refData_1.RefData.fields;
            this.fieldIdentifier = this.fullData.fields[0];
            this.SetPositionOfFields();
            this.formFields = [];
            this.fullData.fields[1].forEach(function (val, index, array) {
                var formField = new index_1.FormField();
                formField.fieldId = val[_this.posFieldId];
                formField.elementId = val[_this.posFieldElementId];
                formField.listId = val[_this.posFieldListId];
                formField.text = val[_this.posFieldName];
                if (_this.posFieldValue > 0) {
                    formField.value = val[_this.posFieldValue];
                }
                formField.validation = {};
                formField.validation.maxLength = val[_this.posFieldMaxLength];
                _this.formFields.push(formField);
            });
            this.fields = { text: 'Name', value: 'Value' };
            this.fieldLists = [];
            this.fullData.fieldLists[1].forEach(function (val, index, array) {
                _this.fieldLists.push({
                    'Id': val[0],
                    'Name': val[2],
                    'Value': val[1] || val[2]
                });
            });
            this.ElementEnum = index_1.ElementEnum;
            this.formFields.forEach(function (value, index, array) {
                _this.controller.addObject(value, value.createValidationRules());
            });
        }
        SecondForm.prototype.activate = function () {
            index_2.log.debug("activate called");
        };
        SecondForm.prototype.created = function (owningView, myView) {
            index_2.log.debug("created called");
        };
        SecondForm.prototype.bind = function (bindingContext, overrideContext) {
            index_2.log.debug("bind called");
            index_2.log.debug(bindingContext);
            index_2.log.debug(overrideContext);
        };
        SecondForm.prototype.attached = function () {
            index_2.log.debug("attached called");
        };
        SecondForm.prototype.deactivate = function () {
            index_2.log.debug("deactivate called");
        };
        SecondForm.prototype.detached = function () {
            index_2.log.debug("detached called");
        };
        SecondForm.prototype.unbind = function () {
            index_2.log.debug("unbind called");
        };
        SecondForm.prototype.filterDataForDropdown = function (listId) {
            return this.fieldLists.filter(function (v) {
                if (v['Id'] == listId) {
                    return true;
                }
            });
        };
        SecondForm.prototype.SetPositionOfFields = function () {
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
        SecondForm.prototype.callDebugger = function () {
            this.formFields.forEach(function (value, index, array) {
                value.disabled = value.disabled ? false : true;
            });
            this.controller.validate()
                .then(function (result) {
                if (result.valid) {
                }
            });
        };
        SecondForm.prototype.save = function () {
            this.controller.validate()
                .then(function (result) {
                if (result.valid) {
                }
            });
        };
        return SecondForm;
    }());
    SecondForm = __decorate([
        aurelia_framework_1.inject(aurelia_framework_1.NewInstance.of(aurelia_validation_1.ValidationController)),
        __metadata("design:paramtypes", [aurelia_validation_1.ValidationController])
    ], SecondForm);
    exports.SecondForm = SecondForm;
});
//# sourceMappingURL=second-form.js.map