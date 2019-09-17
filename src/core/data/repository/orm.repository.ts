import { Repository } from 'typeorm'

export class OrmRepository<T> extends Repository<T> {}
