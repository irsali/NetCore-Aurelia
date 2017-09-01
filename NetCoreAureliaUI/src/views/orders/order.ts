import { inject } from 'aurelia-dependency-injection';

import { EntityViewModel } from '../common/entity-view-model';
import { OrderService, Lookups } from '../../services/index';

@inject(OrderService, Lookups)
export class Order extends EntityViewModel {
    customers;

    constructor(service, lookups) {
        super(service);
        this.customers = lookups.customers;
    }

    get title() {
        if ((<any>this.entity).OrderID <= 0) {
            return 'New Order';
        }
        return `Order #${(<any>this.entity).OrderID}`;
    }
}
