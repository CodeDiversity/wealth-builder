// src/users/users.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Post()
  async create(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.create(body);
  }

  // @Put(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateUserDto: any,
  // ): Promise<User> {
  //   const updatedUser = await this.usersService.update(id, updateUserDto);
  //   if (!updatedUser) {
  //     throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  //   }
  //   return updatedUser;
  // }

  //   @Delete(':id')
  //   async delete(@Param('id') id: string): Promise<User> {
  //     const deletedUser = await this.usersService.delete(id);
  //     if (!deletedUser) {
  //       throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  //     }
  //     return deletedUser;
  //   }
}
