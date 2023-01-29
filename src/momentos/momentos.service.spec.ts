import { Test, TestingModule } from '@nestjs/testing';
import { MomentosService } from './momentos.service';

describe('MomentosService', () => {
  let service: MomentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MomentosService],
    }).compile();

    service = module.get<MomentosService>(MomentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
