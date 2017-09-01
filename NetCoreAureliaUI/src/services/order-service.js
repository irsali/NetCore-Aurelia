define(["require", "exports", "breeze-client", "../settings", "./entity-manager-factory"], function (require, exports, breeze, settings_1, entity_manager_factory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OrderService = (function () {
        function OrderService() {
        }
        OrderService.prototype.getPage = function (pageIndex) {
            var query = new breeze.EntityQuery()
                .from('Orders')
                .select('OrderID, Customer.CompanyName, Employee.FirstName, Employee.LastName, OrderDate, Freight')
                .orderByDesc('OrderDate')
                .skip(pageIndex * settings_1.default.pageSize)
                .take(settings_1.default.pageSize)
                .inlineCount();
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return em.executeQuery(query); })
                .then(function (queryResult) {
                return {
                    entities: queryResult.results,
                    pageCount: 8,
                };
            });
        };
        OrderService.prototype.loadExisting = function (id) {
            var orderQuery = new breeze.EntityQuery().from('Orders').where('OrderID', '==', id), detailQuery = new breeze.EntityQuery().from('OrderDetails').where('OrderID', '==', id);
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return Promise.all([em.executeQuery(orderQuery), em.executeQuery(detailQuery)]); })
                .then(function (values) {
                var queryResult = values[0];
                return {
                    entity: queryResult.results[0],
                    entityManager: queryResult.entityManager
                };
            });
        };
        OrderService.prototype.createNew = function () {
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) {
                return {
                    entity: em.createEntity('Order'),
                    entityManager: em
                };
            });
        };
        return OrderService;
    }());
    exports.OrderService = OrderService;
});
//# sourceMappingURL=order-service.js.map