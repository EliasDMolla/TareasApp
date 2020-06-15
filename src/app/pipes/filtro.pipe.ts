import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(listas: Lista[], completado: Boolean = true ): Lista[] {

    return listas.filter(lista => lista.terminada === completado);
    
  }
}
