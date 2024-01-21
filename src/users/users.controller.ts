import { CreateUserDto } from './dto/create-user.dto';
import { Controller, Post, UseGuards, Request, Body, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Request() req): Promise<any> {
    // Assuming you want to fetch only the data related to the logged-in user
    return this.usersService.findByUserId(req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @Request() req,
  ): Promise<any> {
    // Include the userId from the JWT in the creation process
    return this.usersService.create(createUserDto, req.user.userId);
  }

  // ... other methods, secured with @UseGuards(AuthGuard('jwt')) if necessary
}
