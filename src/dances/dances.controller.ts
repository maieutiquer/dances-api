import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DancesService } from './dances.service';
import { CreateDanceDto } from './dto/create-dance.dto';
import { UpdateDanceDto } from './dto/update-dance.dto';

@Controller('dances')
export class DancesController {
  constructor(private readonly dancesService: DancesService) {}

  @Post()
  create(@Body() createDanceDto: CreateDanceDto) {
    return this.dancesService.create(createDanceDto);
  }

  @Post('csv')
  async csv() {
    await this.dancesService.importCsv();
    return { message: 'CSV data imported successfully' };
  }

  @Get()
  findAll() {
    return this.dancesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dancesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDanceDto: UpdateDanceDto) {
    return this.dancesService.update(+id, updateDanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dancesService.remove(+id);
  }
}
