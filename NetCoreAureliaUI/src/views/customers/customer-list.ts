import { inject, singleton } from 'aurelia-dependency-injection';
import { AppRouter } from 'aurelia-router';

import { ListViewModel } from '../common/list-view-model';
import { CustomerService } from '../../services/index';

@inject(AppRouter, CustomerService)
@singleton()
export class CustomerList extends ListViewModel {
    constructor(router: AppRouter, service: CustomerService) {
        super('customers', router, service)
    }
}
