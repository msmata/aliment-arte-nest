import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';

@Schema()
export class Comida {
  @Prop()
  id: string;
  @Prop()
  name: string;
}

export const ComidaSchema = SchemaFactory.createForClass(Comida);
