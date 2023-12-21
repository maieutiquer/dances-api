import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDanceDto } from './dto/create-dance.dto';
import { UpdateDanceDto } from './dto/update-dance.dto';
import { Dance } from './entities/dance.entity';

@Injectable()
export class DancesService {
  constructor(
    @InjectRepository(Dance)
    private dancesRepository: Repository<Dance>,
  ) {}

  create(createDanceDto: CreateDanceDto) {
    console.log(createDanceDto);
    // return 'This action adds a new dance';
    return this.dancesRepository.insert(createDanceDto);
  }

  findAll(): Promise<Dance[]> {
    return this.dancesRepository.find();
  }

  findOne(id: number): Promise<Dance | null> {
    return this.dancesRepository.findOneBy({ id });
  }

  update(id: number, updateDanceDto: UpdateDanceDto) {
    console.log(updateDanceDto);
    return `This action updates a #${id} dance`;
  }

  async remove(id: number): Promise<void> {
    await this.dancesRepository.delete(id);
  }
}
