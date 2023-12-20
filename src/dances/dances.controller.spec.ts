import { Test, TestingModule } from '@nestjs/testing';
import { DancesController } from './dances.controller';
import { DancesService } from './dances.service';

describe('DancesController', () => {
  let controller: DancesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DancesController],
      providers: [DancesService],
    }).compile();

    controller = module.get<DancesController>(DancesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
