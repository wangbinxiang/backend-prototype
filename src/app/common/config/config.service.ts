import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as Joi from 'joi'

export interface EnvConfig {
  [key: string]: string
}

export class ConfigService {
  private readonly envConfig: EnvConfig

  public constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath))
    this.envConfig = this.validateInput(config)
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test', 'sandbox'])
        .default('development'),
      PORT: Joi.number().default(3000),
      APP_ENV: Joi.string()
    })

    const { error, value: validatedEnvConfig } = Joi.validate(envConfig, envVarsSchema)

    if (error) {
      throw new Error(`Config validation error: ${error.message}`)
    }

    return validatedEnvConfig
  }

  public get APP_ENV(): string {
    return this.envConfig.APP_ENV
  }

  public get PORT(): number {
    return +this.envConfig.PORT
  }
}
