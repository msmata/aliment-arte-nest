import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegistroComida, RegistroComidaSchema } from './registro.entity';

@Injectable()
export class RegistrosService {
  constructor(
    @InjectModel(RegistroComida.name)
    private comidaModel: Model<typeof RegistroComidaSchema>,
  ) {}

  listarRegistrosComida() {
    return this.comidaModel.find();
  }
}
