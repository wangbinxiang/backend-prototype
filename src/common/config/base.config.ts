import { parse, DotenvParseOutput } from 'dotenv'
import * as Joi  from 'joi'
import * as fs from 'fs'

export abstract class BaseConfig {
  protected readonly _envConfig: DotenvParseOutput

  public constructor(filePath: string) {
    const config = parse(fs.readFileSync(filePath))
    this._envConfig = this.validateInput(config)
  }

  protected abstract validatorSchema(): Joi.ObjectSchema;

  protected validateInput(envConfig: DotenvParseOutput): DotenvParseOutput {
    const envVarsSchema: Joi.ObjectSchema = this.validatorSchema()
    return this.validate(envConfig, envVarsSchema)
  }

  protected validate(envConfig: DotenvParseOutput, envVarsSchema: Joi.ObjectSchema) {
    const { error, value: validatedEnvConfig } = Joi.validate(envConfig, envVarsSchema)
    if (error) {
      this.validationError(error)
    }
    return validatedEnvConfig
  }


  protected validationError(error: Error): never {
    throw new Error(`Config validation error: ${error.message}`)
  }
}
