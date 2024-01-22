import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly budgetLimit: number;
}
