import { Comida } from 'src/comidas/comida.entity';
import { Momento } from 'src/momentos/momento.entity';

export class CreateRegistroComidaDTO {
  comida: Comida;
  fecha: string;
  momento: Momento;
}
