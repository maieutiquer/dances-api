import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DancesService } from './dances.service';
import { DancesController } from './dances.controller';
import { Dance } from './entities/dance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dance])],
  controllers: [DancesController],
  providers: [DancesService],
})
export class DancesModule {}
