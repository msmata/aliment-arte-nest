import { Module } from '@nestjs/common';
import { FechasController } from './fechas.controller';
import { FechasService } from './fechas.service';

@Module({
  controllers: [FechasController],
  providers: [FechasService],
})
export class FechasModule {}
