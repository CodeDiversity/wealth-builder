// src/assets/dto/create-asset.dto.ts

import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsDate,
} from 'class-validator';

export class CreateAssetDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly value: number;

  @IsNotEmpty()
  @IsString()
  readonly type: string;

  @IsOptional()
  @IsDate()
  readonly acquisitionDate?: Date;

  @IsOptional()
  @IsNumber()
  readonly acquisitionPrice?: number;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
