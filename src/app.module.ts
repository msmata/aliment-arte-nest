import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComidasModule } from './comidas/comidas.module';
import { FechasService } from './fechas/fechas.service';
import { FechasController } from './fechas/fechas.controller';

@Module({
  imports: [
    ComidasModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL, { dbName: 'aliment-arte' }),
  ],
  controllers: [AppController, FechasController],
  providers: [AppService, FechasService],
})
export class AppModule {}
