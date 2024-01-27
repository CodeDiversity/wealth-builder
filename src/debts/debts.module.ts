import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DebtSchema } from './debt.schema';
import { DebtsService } from './debts.service';
import { DebtsController } from './debts.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Debt', schema: DebtSchema }])],
  providers: [DebtsService],
  controllers: [DebtsController],
})
export class DebtsModule {}
