import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { DebtsService } from './debts.service';
import { CreateDebtDto } from './dto/create-debt.dto';
import { AuthGuard } from '@nestjs/passport';
import { Debt } from './debt.schema';

@Controller('debts')
export class DebtsController {
  constructor(private readonly debtsService: DebtsService) { }

  @UseGuards(AuthGuard('jwt')) // Protect the routes
  @Post()
  async create(
    @Body() createDebtDto: CreateDebtDto,
    @Request() req,
  ): Promise<Debt> {
    return this.debtsService.create(createDebtDto, req.user.userId);
  }

  // ... other routes (GET, PUT, DELETE, etc.)
}
