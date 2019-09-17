import { parse, DotenvParseOutput } from 'dotenv'
import * as Joi from 'joi'
import * as fs from 'fs'

export class BaseConfig {
  protected readonly _envConfig: DotenvParseOutput

  public constructor(filePath: string) {
    const config = parse(fs.readFileSync(filePath))
    this._envConfig = this.validateInput(config)
  }

  protected validatorSchema(): Joi.ObjectSchema {
    throw new Error(`请重写validatorSchema方法`)
  }

  protected validateInput(envConfig: DotenvParseOutput): DotenvParseOutput {
    const envVarsSchema: Joi.ObjectSchema = this.validatorSchema()
    return this.validate(envConfig, envVarsSchema)
  }

  protected validate(envConfig: DotenvParseOutput, envVarsSchema: Joi.ObjectSchema): DotenvParseOutput {
    const { error, value: validatedEnvConfig } = Joi.validate(envConfig, envVarsSchema, { allowUnknown: true })
    if (error) {
      this.validationError(error)
    }
    return validatedEnvConfig
  }

  protected validationError(error: Error): never {
    throw new Error(`Config validation error: ${error.message}`)
  }
}
