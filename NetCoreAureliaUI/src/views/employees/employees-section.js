define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeesSection = (function () {
        function EmployeesSection() {
        }
        EmployeesSection.prototype.configureRouter = function (config, router) {
            config.map([
                { route: '', moduleId: './employee-list', nav: false, title: '' },
                { route: ':id', moduleId: './employee', nav: false, title: '' },
            ]);
        };
        return EmployeesSection;
    }());
    exports.EmployeesSection = EmployeesSection;
});
//# sourceMappingURL=employees-section.js.map