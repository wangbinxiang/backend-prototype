import { Module, Global } from '@nestjs/common'
import { AppConfig, DatabaseConfig } from './config'

const envFile = '.env'

@Global()
@Module({
  imports: [],
  exports: [
  ],
  controllers: [],
  providers: [
    {
      provide: AppConfig,
      useValue: new AppConfig(envFile)
    },
    {
      provide: DatabaseConfig,
      useValue: new DatabaseConfig(envFile)
    }
  ]
})
export class CommonModule {}
