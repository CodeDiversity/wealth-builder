import { Module } from '@nestjs/common';

import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { AssetSchema } from './assets.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Asset', schema: AssetSchema }]),
  ],
  providers: [AssetsService],
  controllers: [AssetsController],
})
export class AssetsModule {}
