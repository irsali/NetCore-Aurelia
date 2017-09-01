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
define(["require", "exports", "aurelia-dependency-injection", "../common/entity-view-model", "../../services/index"], function (require, exports, aurelia_dependency_injection_1, entity_view_model_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Customer = (function (_super) {
        __extends(Customer, _super);
        function Customer(service, lookups) {
            return _super.call(this, service) || this;
        }
        Object.defineProperty(Customer.prototype, "title", {
            get: function () {
                return this.entity.CompanyName || 'Customer';
            },
            enumerable: true,
            configurable: true
        });
        return Customer;
    }(entity_view_model_1.EntityViewModel));
    Customer = __decorate([
        aurelia_dependency_injection_1.inject(index_1.CustomerService, index_1.Lookups),
        __metadata("design:paramtypes", [Object, Object])
    ], Customer);
    exports.Customer = Customer;
});
//# sourceMappingURL=customer.js.map