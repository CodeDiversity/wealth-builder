import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateAssetDto } from './dto/create-asset-dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createAssetDto: CreateAssetDto,
    @Request() req,
  ): Promise<any> {
    return this.assetsService.create(createAssetDto, req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Request() req): Promise<any> {
    return this.assetsService.findAll(req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.assetsService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAssetDto: CreateAssetDto,
  ): Promise<any> {
    return this.assetsService.update(id, updateAssetDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.assetsService.remove(id);
  }
}
