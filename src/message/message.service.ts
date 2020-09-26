import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";

@Injectable()
export class MessageService {
  constructor(
    @InjectModel('messages-history')
    private readonly messageHistoryModel: Model<any>
  ) {
  }

  getMessagesHistory(date) {
    if (date) {
      return this.messageHistoryModel.find({ createdAt: { $gte: date } }).exec()
    } else {
      return this.messageHistoryModel.find().exec()
    }
  }
}
