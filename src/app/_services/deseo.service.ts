import { Lista } from '../models/lista.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeseoService {

  listas: Lista[] = [];

  constructor() { 

    // const lista1 = new Lista('Hacer las compras');
    // const lista2 = new Lista('Terminar el curso de Ionic');

    // this.listas.push(lista1, lista2);

    this.cargarListas();
  }

  nuevaLista(titulo: string) {
    const nuevaLista = new Lista(titulo);

    this.listas.push(nuevaLista);
    this.insertarListas();

    return nuevaLista.id;
  }

  obtenerLista( id: number | string ) {
    id = Number(id);

    return this.listas.find( listaData => {
      return listaData.id === id;
    });
  }

  insertarListas() {

    localStorage.setItem('data', JSON.stringify( this.listas ));

  }

  cargarListas() {
    if(localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

  eliminarLista(lista: Lista) {
    const index = this.listas.indexOf(lista); 
    this.listas.splice(index,1);
    
    this.insertarListas();
  }
}
