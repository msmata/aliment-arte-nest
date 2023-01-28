import { Injectable } from '@nestjs/common';

@Injectable()
export class FechasService {
  //val formatter: DateTimeFormatter = DateTimeFormatter.ofPattern("MM dd yyyy")

  getUltimasFechas(): string[] {
    const listaDeFechas: string[] = [];
    const fechaHoy = Date.now();

    for (let i = 0; i <= 6; i++) {
      const fecha = new Date(fechaHoy - i * 24 * 60 * 60 * 1000);
      const year = fecha.getFullYear();
      const month = fecha.getMonth() + 1;
      const day = fecha.getDate();
      const formattedDate =
        month.toString().padStart(2, '0') +
        ' ' +
        day.toString().padStart(2, '0') +
        ' ' +
        year.toString();

      listaDeFechas.push(formattedDate);
    }

    return listaDeFechas;
  }
}
