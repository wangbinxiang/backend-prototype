import { OrmRepository } from './orm.repository'
// import { FindManyOptions, FindConditions } from 'typeorm'
import { RepositoryInterface } from './repository.interface'

import { DataMapperInterface } from '../data-mapper/data-mapper.interface'

export abstract class BaseRepository<Domain, Entity> implements RepositoryInterface<Domain> {
  public constructor(
    private _repository: OrmRepository<Entity>,
    private _dataMapper: DataMapperInterface<Domain, Entity>
  ) {}

  public async findOne(id: string): Promise<Domain> {
    const entity: Entity = await this._repository.findOne(id)
    return this._dataMapper.toDomain(entity)
  }

  public async findByIds(ids: string[]): Promise<Domain[]> {
    const entities: Entity[] = await this._repository.findByIds(ids)
    return entities.map(entity => this._dataMapper.toDomain(entity))
  }

  // public async findAndCount(options?: FindManyOptions<Entity>): Promise<[Domain[], number]> {
  //     const [entities, count]: [Entity[], number] = await this._repository.findAndCount(options)

  //     const domains: Domain[] = entities.map(entity => this._dataMapper.toDomain(entity))

  //     return [domains, count]
  // }
}
