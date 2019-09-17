export * from './database.config'
export * from './app.config'

import { DatabaseConfig } from './database.config'
import { AppConfig } from './app.config'

export const configList = [AppConfig, DatabaseConfig]
