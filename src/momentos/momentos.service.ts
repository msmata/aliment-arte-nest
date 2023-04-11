import { Injectable } from '@nestjs/common';
import { Momento } from './momento.entity';

@Injectable()
export class MomentosService {
  getMomentos(): Momento[] {
    return [
      { id: '1', name: 'Desayuno/Merienda' },
      { id: '2', name: 'Almuerzo' },
      { id: '4', name: 'Cena' },
    ];
  }
}
