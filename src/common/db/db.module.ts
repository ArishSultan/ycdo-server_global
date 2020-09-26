import { Schema } from 'mongoose'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { MongooseConfigService } from './mongoose-config.service'

/// --> Schema Imports
import { PatientSchema } from './schemas/patient.schema'
import { DoctorsSchema } from './schemas/doctors.schema'
import { BranchesSchema } from './schemas/branches.schema'
import { MedicinesSchema } from './schemas/medicines.schema'
import { TransactionsSchema } from './schemas/transactions.schema'
import { SurgicalItemsSchema } from './schemas/surgical-items.schema'
import { MedicinesStockSchema } from './schemas/medicines-stock.schema'
import { DiagnosticItemsStock } from './schemas/diagnostic-items-stock.schema'
import { SurgicalItemsStockSchema } from './schemas/surgical-items-stock.schema'
import { DiagnosticEquipmentsSchema } from './schemas/diagnostic-equipments.schema'
import { DbService } from './db.service'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService
    }),

    MongooseModule.forFeatureAsync([
      {
        name: 'medicines',
        useFactory: (): Schema => MedicinesSchema
      },
      {
        name: 'medicine-stock',
        useFactory: (): Schema => MedicinesStockSchema
      },
      {
        name: 'surgical-items',
        useFactory: (): Schema => SurgicalItemsSchema
      },
      {
        name: 'surgical-items-stock',
        useFactory: (): Schema => SurgicalItemsStockSchema
      },
      {
        name: 'diagnostic-equipments',
        useFactory: (): Schema => DiagnosticEquipmentsSchema
      },
      {
        name: 'diagnostic-items-stock',
        useFactory: (): Schema => DiagnosticItemsStock
      },
      {
        name: 'branches',
        useFactory: (): Schema => BranchesSchema
      },
      {
        name: 'doctors',
        useFactory: (): Schema => DoctorsSchema
      },
      {
        name: 'patients',
        useFactory: (): Schema => PatientSchema
      },
      {
        name: 'transactions',
        useFactory: (): Schema => TransactionsSchema
      }
    ])
  ],
  providers: [DbService],
  exports: [DbService]
})
export class DbModule {}
