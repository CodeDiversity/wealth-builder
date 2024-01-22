// src/users/users.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) { }

  async findByUserId(userId: string): Promise<User[]> {
    return this.userModel.find({ userId }).exec();
  }

  async findOneByUserId(username: string): Promise<User | null> {
    console.log(username, 'username from findOneByUserId');
    username = username.toLowerCase();
    return this.userModel.findOne({ username }).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const userToLower = createUserDto.username.toLowerCase();
    const newUser = new this.userModel({
      username: userToLower,
      password: hashedPassword,
      ...createUserDto,
    });
    return newUser.save();
  }

  // ... other methods
}
