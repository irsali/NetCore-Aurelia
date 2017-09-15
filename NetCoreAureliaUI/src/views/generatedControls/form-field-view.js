var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../models/index", "../../utils/index"], function (require, exports, aurelia_framework_1, index_1, index_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormFieldView = (function () {
        function FormFieldView() {
            this.watermarkText = "Select";
            this.multiSelectShowCheckbox = true;
            this.cwidth = "100%";
            this.fileSaveUrl = "http://mvc.syncfusion.com/Services/FileUpload/UploadBox/saveFiles";
            this.fileRemoveUrl = "http://mvc.syncfusion.com/Services/FileUpload/UploadBox/removeFiles";
            index_2.log.debug("constructor called");
            this.ElementEnum = index_1.ElementEnum;
        }
        return FormFieldView;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], FormFieldView.prototype, "field", void 0);
    FormFieldView = __decorate([
        aurelia_framework_1.customElement('form-field-view'),
        __metadata("design:paramtypes", [])
    ], FormFieldView);
    exports.FormFieldView = FormFieldView;
});
//# sourceMappingURL=form-field-view.js.map