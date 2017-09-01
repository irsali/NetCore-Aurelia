var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-router", "../common/list-view-model", "../../services/index"], function (require, exports, aurelia_dependency_injection_1, aurelia_router_1, list_view_model_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomerList = (function (_super) {
        __extends(CustomerList, _super);
        function CustomerList(router, service) {
            return _super.call(this, 'customers', router, service) || this;
        }
        return CustomerList;
    }(list_view_model_1.ListViewModel));
    CustomerList = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_router_1.AppRouter, index_1.CustomerService),
        aurelia_dependency_injection_1.singleton(),
        __metadata("design:paramtypes", [aurelia_router_1.AppRouter, index_1.CustomerService])
    ], CustomerList);
    exports.CustomerList = CustomerList;
});
//# sourceMappingURL=customer-list.js.map