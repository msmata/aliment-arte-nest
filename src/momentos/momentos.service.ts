import { Injectable } from '@nestjs/common';
import { Momento } from './momento.entity';

@Injectable()
export class MomentosService {
  getMomentos(): Momento[] {
    return [
      { id: '1', name: 'Desayuno' },
      { id: '2', name: 'Almuerzo' },
      { id: '3', name: 'Merienda' },
      { id: '4', name: 'Cena' },
      { id: '5', name: 'Colación' },
    ];
  }
}
