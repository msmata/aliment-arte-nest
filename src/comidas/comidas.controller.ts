import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateComidaDto } from 'src/dto/CreateComida.dto';
import { Comida } from './comida.entity';
import { ComidasService } from './comidas.service';

@Controller('comidas')
export class ComidasController {
  constructor(private service: ComidasService) {}

  @Get()
  async findAll(): Promise<Comida[]> {
    return await this.service.findAll();
  }

  @Post()
  async createComida(@Body() comidaDTO: CreateComidaDto) {
    return await this.service.createComida(comidaDTO);
  }
}
