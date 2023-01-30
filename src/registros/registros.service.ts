import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRegistroComidaDTO } from 'src/dto/CreateRegistroComida.dto';
import { RegistroComida, RegistroComidaSchema } from './registro.entity';

@Injectable()
export class RegistrosService {
  constructor(
    @InjectModel(RegistroComida.name)
    private registroComidaModel: Model<typeof RegistroComidaSchema>,
  ) {}

  listarRegistrosComida() {
    return this.registroComidaModel.find();
  }

  createRegistroComida(comidaDTO: CreateRegistroComidaDTO) {
    const newRegistroComida = new this.registroComidaModel(comidaDTO);
    return newRegistroComida.save();
  }
}
