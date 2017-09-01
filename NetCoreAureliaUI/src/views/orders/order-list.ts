import {inject, singleton} from 'aurelia-dependency-injection';
import { AppRouter } from 'aurelia-router';

import { ListViewModel } from '../common/list-view-model';
import { OrderService } from '../../services/index';

@inject(AppRouter, OrderService)
@singleton()
export class OrderList extends ListViewModel {
  constructor(router, service) {
    super('orders', router, service)
  }
}
