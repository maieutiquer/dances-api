import { Module } from '@nestjs/common';
import { DancesService } from './dances.service';
import { DancesController } from './dances.controller';

@Module({
  controllers: [DancesController],
  providers: [DancesService],
})
export class DancesModule {}
