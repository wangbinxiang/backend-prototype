import * as Joi from 'joi'

import { BaseConfig } from './base.config'

export class AppConfig extends BaseConfig {
  protected validatorSchema(): Joi.ObjectSchema {
    return Joi.object({
      APP_ENV: Joi.string()
        .valid(['dev', 'production', 'test', 'sandbox'])
        .default('dev'),
      PORT: Joi.number().default(3000)
    })
  }

  public get APP_ENV(): string {
    return this._envConfig.APP_ENV
  }

  public get PORT(): number {
    return +this._envConfig.PORT
  }
}
