import { inject } from 'aurelia-dependency-injection';

import { EntityViewModel } from '../common/entity-view-model';
import { Lookups, CustomerService } from '../../services/index';

@inject(CustomerService, Lookups)
export class Customer extends EntityViewModel {

    constructor(service, lookups) {
        super(service);
    }

    get title() {
        return (<any>this.entity).CompanyName || 'Customer';
    }
}
