import { Controller, Get, Query } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly service: MessageService) {
  }

  @Get()
  getMessagesHistory(@Query('lastDate') lastDate: string): any {
    return this.service.getMessagesHistory(lastDate)
  }
}
