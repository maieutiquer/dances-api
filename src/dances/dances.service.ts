import { Injectable } from '@nestjs/common';
import { CreateDanceDto } from './dto/create-dance.dto';
import { UpdateDanceDto } from './dto/update-dance.dto';

@Injectable()
export class DancesService {
  create(createDanceDto: CreateDanceDto) {
    return 'This action adds a new dance';
  }

  findAll() {
    return `This action returns all dances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dance`;
  }

  update(id: number, updateDanceDto: UpdateDanceDto) {
    return `This action updates a #${id} dance`;
  }

  remove(id: number) {
    return `This action removes a #${id} dance`;
  }
}
