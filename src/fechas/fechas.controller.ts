import { Controller, Get } from '@nestjs/common';
import { FechasService } from './fechas.service';

@Controller('ultimasFechas')
export class FechasController {
  constructor(private service: FechasService) {}

  @Get()
  getUltimasFechas() {
    return this.service.getUltimasFechas();
  }
}
