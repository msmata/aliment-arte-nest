import { Controller, Get } from '@nestjs/common';
import { MomentosService } from './momentos.service';

@Controller('momentos')
export class MomentosController {
  constructor(private service: MomentosService) {}

  @Get()
  getMomentos() {
    return this.service.getMomentos();
  }
}
