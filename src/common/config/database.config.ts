import * as Joi from 'joi'

import { BaseConfig } from './base.config'


export class DatabaseConfig extends BaseConfig{

  protected validatorSchema(): Joi.ObjectSchema {
    return Joi.object({
      DB_HOST: Joi.string(),
      DB_PORT: Joi.number().default(3306),
      DB_DATABASE: Joi.string(),
      DB_USERNAME: Joi.string(),
      DB_PASSWORD: Joi.string(),
    })
  }

  public get DB_HOST(): string {
    return this._envConfig.DB_HOST
  }

  public get DB_PORT(): number {
    return +this._envConfig.DB_PORT
  }

  public get DB_DATABASE(): string {
    return this._envConfig.DB_DATABASE
  }

  public get DB_USERNAME(): string {
    return this._envConfig.DB_USERNAME
  }

  public get DB_PASSWORD(): string {
    return this._envConfig.DB_PASSWORD
  }
}
