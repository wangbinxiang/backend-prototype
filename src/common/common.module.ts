import { Module, Global } from '@nestjs/common'
import { buildConfigProviders } from './config/factory/build-config-providers'
import { configList } from './config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { TypeOrmConfigService } from './typeorm/typeorm-config.service'

const configProviders = buildConfigProviders()

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    })
  ],
  exports: [...configList],
  controllers: [],
  providers: [...configProviders]
})
export class CommonModule {}
