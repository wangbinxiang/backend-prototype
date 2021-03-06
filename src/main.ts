import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
  await app.listen(3000, '0.0.0.0', (): void => {
    console.log('==> 🌎 nest server listening on port: %d ', 3000)
  })
}
bootstrap()
