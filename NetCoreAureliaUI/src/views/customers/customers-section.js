define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomersSection = (function () {
        function CustomersSection() {
        }
        CustomersSection.prototype.configureRouter = function (config, router) {
            config.map([
                { route: '', moduleId: './customer-list', nav: false, title: '' },
                { route: ':id', moduleId: './customer', nav: false, title: '' },
            ]);
        };
        return CustomersSection;
    }());
    exports.CustomersSection = CustomersSection;
});
//# sourceMappingURL=customers-section.js.map