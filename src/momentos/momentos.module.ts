import { Module } from '@nestjs/common';

import { MomentosController } from './momentos.controller';
import { MomentosService } from './momentos.service';

@Module({
  controllers: [MomentosController],
  providers: [MomentosService],
})
export class MomentosModule {}
