import { BaseConfig } from '../base.config'

export interface ConfigProviderInterface {
  provide: typeof BaseConfig
  useValue: BaseConfig
}
