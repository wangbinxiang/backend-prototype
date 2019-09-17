import { Injectable } from '@nestjs/common'
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { DatabaseConfig } from '../config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {

  public constructor(private readonly _DatabaseConfig: DatabaseConfig) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this._DatabaseConfig.DB_HOST,
      port: this._DatabaseConfig.DB_PORT,
      username: this._DatabaseConfig.DB_USERNAME,
      password: this._DatabaseConfig.DB_PASSWORD,
      database: this._DatabaseConfig.DB_DATABASE,
      entities: ['../../**/*.entity{.ts,.js}'],
      synchronize: false,
    };
  }
}
