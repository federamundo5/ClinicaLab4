import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datos'
})
export class DatosPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
    let valorFinal = [];

    for(let item of Object.keys(value))
    {
        valorFinal.push({nombre: item , valor : value[item]});
    }

    return valorFinal;
  }

}
