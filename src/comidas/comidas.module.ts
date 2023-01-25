import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Comida, ComidaSchema } from './comida.entity';
import { ComidasController } from './comidas.controller';
import { ComidasService } from './comidas.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comida.name, schema: ComidaSchema }]),
  ],
  controllers: [ComidasController],
  providers: [ComidasService],
})
export class ComidasModule {}
