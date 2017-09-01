import { createEntityManager } from './entity-manager-factory';
import * as breeze from 'breeze-client';

import settings from '../settings';
import { IEntityResult, IEntitiesResult, IService } from './i-service';

export class CustomerService implements IService {

    getPage(pageIndex: number) {
        var query = new breeze.EntityQuery()
            .from('Customers')
            .select('CustomerID, CompanyName, ContactName, City, Phone, Fax')
            .orderBy('CompanyName')
            .skip(pageIndex * settings.pageSize)
            .take(settings.pageSize)
            .inlineCount();

        return createEntityManager()
            .then(em => em.executeQuery(query))
            .then(queryResult => {
                return <IEntitiesResult>{
                    entities: queryResult.results,
                    pageCount: 1, //Math.ceil(queryResult.inlineCount / this.pageSize);
                };
            });
    }

    loadExisting(id) {
        var customerQuery = new breeze.EntityQuery().from('Customers').where('CustomerID', breeze.FilterQueryOp.Equals, id);

        return createEntityManager()
            .then(em => em.executeQuery(customerQuery))
            .then(queryResult => {
                return <IEntityResult>{
                    entity: queryResult.results[0],
                    entityManager: queryResult.entityManager
                };
            });
    }

    createNew() {
        return createEntityManager()
            .then(em => {
                return <IEntityResult>{
                    entity: em.createEntity('Customer'),
                    entityManager: em
                };
            });
    }
}
