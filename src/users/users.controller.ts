import { CreateUserDto } from './dto/create-user.dto';
import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Request() req): Promise<any> {
    // Assuming you want to fetch only the data related to the logged-in user
    return this.usersService.findByUserId(req.user.userId);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.usersService.create(createUserDto);
  }

  // ... other methods, secured with @UseGuards(AuthGuard('jwt')) if necessary
}
