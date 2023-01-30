import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRegistroComidaDTO } from 'src/dto/CreateRegistroComida.dto';
import { RegistrosService } from './registros.service';

@Controller('registros')
export class RegistrosController {
  constructor(private service: RegistrosService) {}

  @Get()
  async listarRegistrosComida() {
    return this.service.listarRegistrosComida();
  }

  @Post()
  async createComida(@Body() comidaDTO: CreateRegistroComidaDTO) {
    await this.service.createRegistroComida(comidaDTO);
  }
}
