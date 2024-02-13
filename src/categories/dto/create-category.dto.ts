import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly budgetLimit: number;

  @IsString()
  @IsOptional()
  readonly description: string;
}
