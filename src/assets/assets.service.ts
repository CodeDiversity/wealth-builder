import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAssetDto } from './dto/create-asset-dto';
import { Asset } from './assets.schema';

@Injectable()
export class AssetsService {
  constructor(@InjectModel('Asset') private assetModel: Model<Asset>) {}

  async create(createAssetDto: CreateAssetDto, userId: string): Promise<Asset> {
    const newAsset = new this.assetModel({
      ...createAssetDto,
      userId, // Associate the asset with the user
    });
    return newAsset.save();
  }

  async findAll(userId: string): Promise<Asset[]> {
    return this.assetModel.find({ userId }).exec(); // Find all assets for the user
  }

  async findOne(id: string): Promise<Asset> {
    return this.assetModel.findById(id).exec(); // Find a single asset by id
  }

  async update(id: string, updateAssetDto: CreateAssetDto): Promise<Asset> {
    return this.assetModel
      .findByIdAndUpdate(id, updateAssetDto, { new: true })
      .exec(); // Update the asset and return the updated document
  }

  async remove(id: string): Promise<Asset> {
    return this.assetModel.findByIdAndDelete(id).exec(); // Remove the asset
  }
}
