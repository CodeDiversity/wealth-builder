import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Category') private categoryModel: Model<Category>,
  ) { }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category | null> {
    return this.categoryModel.findById(id).exec();
  }

  async create(
    createCategoryDto: CreateCategoryDto,
    userId: ObjectId,
  ): Promise<Category> {
    console.log(userId, 'userId in service');
    const newCategory = new this.categoryModel({
      ...createCategoryDto,
      userId: new ObjectId(userId),
    });
    return newCategory.save();
  }
}
