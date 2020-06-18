import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Pipe({
  name: 'fechaPipe'
})
export class FechasPipe implements PipeTransform {

    transform(value: string, args: any[]): string {
        if (!value) { return ''; }
        return value.substring(0, 10);
      }

}

