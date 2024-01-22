import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
    @Request() req,
  ): Promise<Category> {
    console.log(req.user, 'user from create category');
    // Extract user ID from the request object
    const userId = req.user.userId; // Make sure 'userId' corresponds to the property in the JWT payload
    return this.categoriesService.create(createCategoryDto, userId);
  }

  // ... other routes (PUT, DELETE, etc.)
}
