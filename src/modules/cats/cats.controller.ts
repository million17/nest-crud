import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatDto } from './dto/cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() requestCreateCat: CatDto) {
    this.catsService.create(requestCreateCat);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() requestUpdateCat: CatDto): string {
    return `This is actions update Cat id= ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return `This is actions delete Cat id = ${id}`;
  }
}
