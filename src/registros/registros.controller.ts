import { Controller, Get } from '@nestjs/common';
import { RegistrosService } from './registros.service';

@Controller('registros')
export class RegistrosController {
  constructor(private service: RegistrosService) {}

  @Get()
  async listarRegistrosComida() {
    return this.service.listarRegistrosComida();
  }
}
