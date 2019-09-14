export abstract class BaseDataMapper<Domain, Entity>{
    public abstract toDomain(entity: Entity): Domain
    public abstract toEntity(domain: Domain): Entity
}