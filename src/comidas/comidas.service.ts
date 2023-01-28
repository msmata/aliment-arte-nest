import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateComidaDto } from 'src/dto/CreateComida.dto';
import { Comida, ComidaSchema } from './comida.entity';

@Injectable()
export class ComidasService {
  constructor(
    @InjectModel(Comida.name) private comidaModel: Model<typeof ComidaSchema>,
  ) {}

  async findAll(): Promise<Comida[]> {
    return this.comidaModel.find();
  }

  async createComida(createComidaDTO: CreateComidaDto) {
    const newComida = new this.comidaModel(createComidaDTO);
    return newComida.save();
  }
}
