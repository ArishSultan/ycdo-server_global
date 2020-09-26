import { Schema } from 'mongoose'
import { Module } from '@nestjs/common'
import { MessageSchema } from './message.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { MessageGateway } from './message.gateway'
import { MessageLogSchema } from './message-log.schema'
import { DbModule } from '../common/db/db.module'
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  imports: [
    DbModule,
    MongooseModule.forFeatureAsync([
      {
        name: 'messages-history',
        useFactory: (): Schema => MessageSchema
      },
      {
        name: 'messages-log',
        useFactory: (): Schema => MessageLogSchema
      }
    ])
  ],
  providers: [MessageGateway, MessageService],
  controllers: [MessageController]
})
export class MessageModule {}
