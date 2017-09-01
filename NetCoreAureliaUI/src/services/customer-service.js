define(["require", "exports", "./entity-manager-factory", "breeze-client", "../settings"], function (require, exports, entity_manager_factory_1, breeze, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomerService = (function () {
        function CustomerService() {
        }
        CustomerService.prototype.getPage = function (pageIndex) {
            var query = new breeze.EntityQuery()
                .from('Customers')
                .select('CustomerID, CompanyName, ContactName, City, Phone, Fax')
                .orderBy('CompanyName')
                .skip(pageIndex * settings_1.default.pageSize)
                .take(settings_1.default.pageSize)
                .inlineCount();
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return em.executeQuery(query); })
                .then(function (queryResult) {
                return {
                    entities: queryResult.results,
                    pageCount: 1,
                };
            });
        };
        CustomerService.prototype.loadExisting = function (id) {
            var customerQuery = new breeze.EntityQuery().from('Customers').where('CustomerID', breeze.FilterQueryOp.Equals, id);
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return em.executeQuery(customerQuery); })
                .then(function (queryResult) {
                return {
                    entity: queryResult.results[0],
                    entityManager: queryResult.entityManager
                };
            });
        };
        CustomerService.prototype.createNew = function () {
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) {
                return {
                    entity: em.createEntity('Customer'),
                    entityManager: em
                };
            });
        };
        return CustomerService;
    }());
    exports.CustomerService = CustomerService;
});
//# sourceMappingURL=customer-service.js.map