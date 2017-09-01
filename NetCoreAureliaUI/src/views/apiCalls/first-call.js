var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "../../services/index"], function (require, exports, aurelia_dependency_injection_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FirstCall = (function () {
        function FirstCall(service) {
            this.service = service;
        }
        FirstCall.prototype.metaData = function () {
            var _this = this;
            this.service
                .getString('http://localhost:64922/breeze/Todoes/Metadata')
                .then(function (x) {
                return _this.responseText = x;
            })
                .catch(function (r) { console.log(r); _this.responseText = r; });
        };
        FirstCall.prototype.getTodoes = function () {
            var _this = this;
            this.service
                .getJson('http://localhost:64922/api/TodoItems')
                .then(function (x) {
                return _this.gtodoes = JSON.stringify(x);
            })
                .catch(function (r) { console.log(r); _this.gtodoes = JSON.stringify(r); });
        };
        FirstCall.prototype.apiTodoes = function () {
            var _this = this;
            this.service
                .postJson('http://localhost:64922/breeze/TodoItems/PostTodoItem', { title: this.Title, Description: this.Description })
                .then(function (x) {
                return _this.todoes = x;
            })
                .catch(function (r) { console.log(r); _this.todoes = JSON.stringify(r); });
        };
        FirstCall.prototype.deleteString = function (toDelete) {
            this[toDelete] = '';
        };
        return FirstCall;
    }());
    FirstCall = __decorate([
        aurelia_dependency_injection_1.inject(index_1.HttpService),
        __metadata("design:paramtypes", [index_1.HttpService])
    ], FirstCall);
    exports.FirstCall = FirstCall;
});
//# sourceMappingURL=first-call.js.map