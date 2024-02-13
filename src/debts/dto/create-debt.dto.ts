import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsDate,
} from 'class-validator';

export class CreateDebtDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly amount: number;

  @IsOptional()
  @IsNumber()
  readonly interestRate?: number;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  readonly dueDate?: Date;

  @IsOptional()
  @IsNumber()
  readonly minimumPayment?: number;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  readonly paymentDate?: Date;

  @IsOptional()
  @IsNumber()
  readonly remainingBalance?: number;

  @IsOptional()
  @IsNumber()
  readonly paymentsRemaining?: number;

  @IsOptional()
  @IsNumber()
  readonly initialPaymentTerm?: number;

  // ... add other fields as needed
}
