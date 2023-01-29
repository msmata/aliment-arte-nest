import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistroComida, RegistroComidaSchema } from './registro.entity';
import { RegistrosController } from './registros.controller';
import { RegistrosService } from './registros.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RegistroComida.name, schema: RegistroComidaSchema },
    ]),
  ],
  controllers: [RegistrosController],
  providers: [RegistrosService],
})
export class RegistrosModule {}
