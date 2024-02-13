import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty({
    example: 'password',
    description: 'The password of the user',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
