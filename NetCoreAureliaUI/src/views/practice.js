define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Practice = (function () {
        function Practice() {
        }
        Practice.prototype.configureRouter = function (config, router) {
            config.title = 'Practice';
            config.map([
                { route: ['', 'simple-form'], moduleId: './forms/simple-form', name: 'simple-form', title: 'Simple Form' },
                { route: 'simple-grid', moduleId: './grids/simple-grid', name: 'simple-grid', title: 'Simple Grid' },
                { route: 'dropdown', moduleId: './forms/dropdown', name: 'dropdown', title: 'Dropdown' },
                { route: 'api-calls', moduleId: './apiCalls/first-call', name: 'api-calls', title: 'Api Calls', settings: { login: 'no-login' } }
            ]);
        };
        return Practice;
    }());
    exports.Practice = Practice;
});
//# sourceMappingURL=practice.js.map