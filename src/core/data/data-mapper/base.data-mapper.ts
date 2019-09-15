import { DataMapperInterface } from './data-mapper.interface'
import { BaseEntity } from '../entity/base.entity'
import { BaseDomain } from '../../application/domain/base.domain'


export abstract class BaseDataMapper implements DataMapperInterface<BaseDomain, BaseEntity>{
    public abstract  toDomain(entity: BaseDomain): BaseDomain;
    public abstract  toEntity(entity: BaseDomain): BaseDomain;
}