define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BootstrapFormValidationRenderer = (function () {
        function BootstrapFormValidationRenderer() {
        }
        BootstrapFormValidationRenderer.prototype.render = function (instruction) {
            for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                var _b = _a[_i], result = _b.result, elements = _b.elements;
                for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                    var element = elements_1[_c];
                    this.remove(element, result);
                }
            }
            for (var _d = 0, _e = instruction.render; _d < _e.length; _d++) {
                var _f = _e[_d], result = _f.result, elements = _f.elements;
                for (var _g = 0, elements_2 = elements; _g < elements_2.length; _g++) {
                    var element = elements_2[_g];
                    this.add(element, result);
                }
            }
        };
        BootstrapFormValidationRenderer.prototype.add = function (element, result) {
            if (result.valid) {
                return;
            }
            var formGroup = element.closest('.form-group');
            if (!formGroup) {
                return;
            }
            formGroup.classList.add('has-danger');
            var message = document.createElement('div');
            message.className = 'form-control-feedback';
            message.textContent = result.message;
            message.id = "validation-message-" + result.id;
            formGroup.lastElementChild.appendChild(message);
        };
        BootstrapFormValidationRenderer.prototype.remove = function (element, result) {
            if (result.valid) {
                return;
            }
            var formGroup = element.closest('.form-group');
            if (!formGroup) {
                return;
            }
            var message = formGroup.lastElementChild.querySelector("#validation-message-" + result.id);
            if (message) {
                formGroup.lastElementChild.removeChild(message);
                if (formGroup.lastElementChild.querySelectorAll('.form-control-feedback').length === 0) {
                    formGroup.classList.remove('has-danger');
                }
            }
        };
        return BootstrapFormValidationRenderer;
    }());
    exports.BootstrapFormValidationRenderer = BootstrapFormValidationRenderer;
});
//# sourceMappingURL=bootstrap-form-validation-renderer.js.map