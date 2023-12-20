import { Test, TestingModule } from '@nestjs/testing';
import { DancesService } from './dances.service';

describe('DancesService', () => {
  let service: DancesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DancesService],
    }).compile();

    service = module.get<DancesService>(DancesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
