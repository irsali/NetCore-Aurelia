import {inject, singleton} from 'aurelia-dependency-injection';
import {AppRouter} from 'aurelia-router';

import { ListViewModel } from '../common/list-view-model';
import { EmployeeService } from '../../services/index';

@inject(AppRouter, EmployeeService)
@singleton()
export class EmployeeList extends ListViewModel {
  constructor(router, service) {
    super('employees', router, service)
  }
}
