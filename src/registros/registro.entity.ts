import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Comida } from 'src/comidas/comida.entity';
import { Momento } from 'src/momentos/momento.entity';

@Schema({ collection: 'registros' })
export class RegistroComida {
  @Prop()
  id: string;
  @Prop({ type: Comida })
  comida: Comida;
  @Prop()
  fecha: string;
  @Prop({ type: Momento })
  momento: Momento;
}

export const RegistroComidaSchema = SchemaFactory.createForClass(RegistroComida);
