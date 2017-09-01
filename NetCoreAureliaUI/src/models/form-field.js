define(["require", "exports", "aurelia-validation"], function (require, exports, aurelia_validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormField = (function () {
        function FormField() {
        }
        FormField.prototype.createValidationRules = function () {
            if (this.hasValidationRule()) {
                return aurelia_validation_1.ValidationRules.ensure(function (x) { return x.value; })
                    .required()
                    .email().when(function (x) { return x.validation && x.validation.email; })
                    .maxLength(this.validation.maxLength).when(function (x) { return x.validation && x.validation.maxLength; })
                    .minLength(this.validation.maxLength).when(function (x) { return x.validation && x.validation.minLength; })
                    .rules;
            }
        };
        FormField.prototype.hasValidationRule = function () {
            return true;
        };
        FormField.prototype.isRequired = function () {
            if (this && this.validation && this.validation.required)
                return true;
            return false;
        };
        FormField.prototype.isEmail = function () {
            if (this && this.validation && this.validation.email)
                return true;
            return false;
        };
        FormField.prototype.isMaxLength = function () {
            if (this && this.validation && this.validation.maxLength)
                return true;
            return false;
        };
        FormField.prototype.isMinLength = function () {
            if (this && this.validation && this.validation.minLength)
                return true;
            return false;
        };
        return FormField;
    }());
    exports.FormField = FormField;
});
//# sourceMappingURL=form-field.js.map