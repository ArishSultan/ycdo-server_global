import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { resolveCollectionName } from './utils'

@Injectable()
export class DbService {
  constructor(
    @InjectModel('medicines')
    private readonly medicinesModel: Model<any>,
    @InjectModel('medicine-stock')
    private readonly medicinesStockModel: Model<any>,

    @InjectModel('surgical-items')
    private readonly surgicalItemsModel: Model<any>,
    @InjectModel('surgical-items-stock')
    private readonly surgicalItemsStockModel: Model<any>,

    @InjectModel('diagnostic-equipments')
    private readonly diagnosticEquipmentsModel: Model<any>,
    @InjectModel('diagnostic-items-stock')
    private readonly diagnosticEquipmentsStockModel: Model<any>,

    @InjectModel('branches')
    private readonly branchesModel: Model<any>,
    @InjectModel('doctors')
    private readonly doctorsModel: Model<any>,
    @InjectModel('patients')
    private readonly patientsModel: Model<any>,
    @InjectModel('transactions')
    private readonly transactionsModel: Model<any>
  ) {}

  handleMessage(data: any): void {
    data.data = JSON.parse(data.data)
    const service: Model<any> = this[resolveCollectionName(data.collectionName)]

    if (service) {
      switch (data.action) {
        case 'insert':
          service.create(data.data).catch((err) => console.log(err))
          break
        case 'delete':
          service.findByIdAndDelete(data.data._id)
          break
        case 'update':
          service.findByIdAndUpdate(data.data._id, data.data)
          break
      }
    } else {
      console.log('An Invalid Collection Name was provided to the Server.')
    }
  }
}
