import { Controller, Get } from '@nestjs/common';
import { Comida } from './comida.entity';
import { ComidasService } from './comidas.service';

@Controller('comidas')
export class ComidasController {
  constructor(private service: ComidasService) {}
  @Get()
  async findAll(): Promise<Comida[]> {
    return await this.service.findAll();
  }
}
