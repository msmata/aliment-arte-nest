import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComidasModule } from './comidas/comidas.module';
import { RegistrosModule } from './registros/registros.module';
import { FechasModule } from './fechas/fechas.module';
import { MomentosModule } from './momentos/momentos.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL, { dbName: 'aliment-arte' }),
    ComidasModule,
    RegistrosModule,
    FechasModule,
    MomentosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
