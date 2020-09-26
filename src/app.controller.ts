import { Controller, Get, Query } from '@nestjs/common'
import { DbService } from './common/db/db.service'

@Controller()
export class AppController {
  constructor(private readonly service: DbService) {}

  @Get() ping(): string {
    return 'This is the Main Server of YCDO Org.'
  }

  @Get('new-messages')
  getNewMessages(@Query('last-connection') lastConnection) {
    // return this.service.getMessagesAfter(lastConnection)
  }
}
