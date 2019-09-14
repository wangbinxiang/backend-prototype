export interface DataMapperInterface<Domain, Entity> {
    toDomain(entity: Entity): Domain;
    toEntity(domain: Domain): Entity;
}