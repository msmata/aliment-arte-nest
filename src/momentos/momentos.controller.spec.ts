import { Test, TestingModule } from '@nestjs/testing';
import { MomentosController } from './momentos.controller';

describe('MomentosController', () => {
  let controller: MomentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MomentosController],
    }).compile();

    controller = module.get<MomentosController>(MomentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
