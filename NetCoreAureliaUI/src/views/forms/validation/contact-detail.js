var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-validation", "../../../utils/bootstrap-form-validation-renderer"], function (require, exports, aurelia_framework_1, aurelia_validation_1, bootstrap_form_validation_renderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactDetail = (function () {
        function ContactDetail(controller) {
            this.controller = controller;
            this.controller.addRenderer(new bootstrap_form_validation_renderer_1.BootstrapFormValidationRenderer());
        }
        ContactDetail.prototype.createValidationRules = function () {
            return aurelia_validation_1.ValidationRules.ensure(function (x) { return x.email; })
                .required().email().rules;
        };
        ContactDetail.prototype.bind = function () {
            console.log("bind called");
        };
        ContactDetail.prototype.unBind = function () {
            console.log("unBind called");
        };
        ContactDetail.prototype.attached = function () {
            console.log("attached called");
        };
        ContactDetail.prototype.detached = function () {
            console.log("detached called");
        };
        ContactDetail.prototype.activate = function (params, routeConfig) {
            console.log("activate called");
            this.contact = {};
            this.controller.addObject(this.contact, this.createValidationRules());
        };
        Object.defineProperty(ContactDetail.prototype, "canSave", {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        ContactDetail.prototype.save = function () {
            this.controller.validate()
                .then(function (result) {
                if (result.valid) {
                    console.log("save success");
                }
                else {
                    console.log("save fail");
                }
            });
        };
        ContactDetail.prototype.canDeactivate = function () {
            console.log("canDeactivate called");
            return true;
        };
        return ContactDetail;
    }());
    ContactDetail = __decorate([
        aurelia_framework_1.inject(aurelia_framework_1.NewInstance.of(aurelia_validation_1.ValidationController)),
        __metadata("design:paramtypes", [aurelia_validation_1.ValidationController])
    ], ContactDetail);
    exports.ContactDetail = ContactDetail;
});
//# sourceMappingURL=contact-detail.js.map