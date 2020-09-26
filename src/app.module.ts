import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { MessageModule } from './message/message.module'
import { DbModule } from './common/db/db.module'

@Module({
  imports: [DbModule, MessageModule],
  controllers: [AppController]
})
export class AppModule {}
