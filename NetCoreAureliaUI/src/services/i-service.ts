import * as breeze from 'breeze-client';

export interface IService {
    getPage(pageIndex: number): Promise<IEntitiesResult>;
    loadExisting(id: string): Promise<IEntityResult>;
    createNew(): Promise<IEntityResult>;
}


export interface IEntityResult {
    entity: breeze.Entity;
    entityManager: breeze.EntityManager;
}

export interface IEntitiesResult {
    entities: breeze.Entity[];
    pageCount: number;
}
