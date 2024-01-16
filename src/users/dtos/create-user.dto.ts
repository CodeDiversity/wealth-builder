// src/users/dto/create-user.dto.ts

export class CreateUserDto {
  readonly email: string;
  readonly username: string;
  readonly password: string;
}

// src/users/dto/update-user.dto.ts

export class UpdateUserDto {
  readonly email?: string;
  readonly username?: string;
  readonly password?: string;
}
