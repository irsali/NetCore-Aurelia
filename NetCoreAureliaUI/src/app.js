var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Syncfusion';
            config.addAuthorizeStep(AuthorizeStep);
            config.map([
                { route: 'practice', moduleId: 'views/practice', name: 'practice' },
                { route: 'iq-portal', moduleId: 'views/iq-portal', name: 'iq-portal' },
                { route: 'drawer', moduleId: 'views/navigation/drawer', name: 'drawer', title: 'Drawer' },
                { route: 'generatedControls/firstForm', moduleId: 'views/generatedControls/first-form', name: 'generatedControlsFirstForm', title: 'First Form' },
                { route: 'generatedControls/secondForm', moduleId: 'views/generatedControls/second-form', name: 'generatedControlsSecondForm', title: 'Second Form' },
                { route: 'generatedControls/thirdForm', moduleId: 'views/generatedControls/third-form', name: 'generatedControlsThirdForm', title: 'Third Form' },
                { route: 'orders', moduleId: './views/orders/orders-section', name: 'orders', nav: true, title: 'Orders' },
                { route: 'customers', moduleId: './views/customers/customers-section', name: 'customers', nav: true, title: 'Customers' },
                { route: 'employees', moduleId: './views/employees/employees-section', name: 'employees', nav: true, title: 'Employees' },
                { route: 'charts', moduleId: './views/charts/charts', name: 'charts', title: 'Charts' },
                { route: 'charts-pie', moduleId: './views/charts/charts-pie', name: 'chartsPie', title: 'Pie Charts' },
                { route: 'charts-bar', moduleId: './views/charts/charts-bar', name: 'chartsBar', title: 'Bar Charts' },
                { route: 'charts-line', moduleId: './views/charts/charts-line', name: 'chartsLine', title: 'Line Charts' },
                { route: 'charts-column', moduleId: './views/charts/charts-column', name: 'chartsColumn', title: 'Column Charts' },
                { route: 'secure-views', moduleId: './views/secure-views/secure-views', name: 'secure-views', settings: { login: 'login' } },
                { route: '', redirect: 'practice' }
            ]);
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject()
    ], App);
    exports.App = App;
    var AuthorizeStep = (function () {
        function AuthorizeStep() {
        }
        AuthorizeStep.prototype.run = function (navigationInstruction, next) {
            var navigationInstructionArray = navigationInstruction.getAllInstructions();
            if (navigationInstructionArray.some(function (i) { return i.config.settings.login == 'login'; })) {
                var isLoginView = (navigationInstructionArray.some(function (i) { return i.config.name == 'login'; }));
                if (!isLoginView) {
                    var isLogin = false;
                    if (!isLogin) {
                        return next.cancel(new aurelia_router_1.Redirect('#/secure-views/login'));
                    }
                }
            }
            return next();
        };
        return AuthorizeStep;
    }());
});
//# sourceMappingURL=app.js.map