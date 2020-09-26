import { Model } from 'mongoose'
import { Socket } from 'socket.io'
import { InjectModel } from '@nestjs/mongoose'
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets'
import { DbService } from '../common/db/db.service'

@WebSocketGateway()
export class MessageGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private service: DbService,

    @InjectModel('messages-log')
    private readonly messageLogModel: Model<any>,

    @InjectModel('messages-history')
    private readonly messageHistoryModel: Model<any>
  ) {}


  @SubscribeMessage('message')
  async handleMessage(client: Socket, payload: any): Promise<void> {
    await this.messageHistoryModel.create(payload)
    await this.service.handleMessage(payload)
    client.broadcast.emit('message', payload)
  }

  async handleConnection(client: Socket): Promise<string> {
    const message = client.request.connection.remoteAddress + ' [Connected]'
    await this.messageLogModel.create({ message })

    return message
  }

  async handleDisconnect(client: Socket): Promise<string> {
    const message = client.request.connection.remoteAddress + ' [Disconnected]'
    await this.messageLogModel.create({ message })

    return message
  }
}
