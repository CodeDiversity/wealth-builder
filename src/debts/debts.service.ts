import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Debt } from './debt.schema';

@Injectable()
export class DebtsService {
  constructor(@InjectModel('Debt') private debtModel: Model<Debt>) { }

  create(createDebtDto: any, userId: string): Promise<Debt> {
    const newDebt = new this.debtModel({
      ...createDebtDto,
      userId,
    });
    return newDebt.save();
  }
}
