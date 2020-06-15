import { ListaItem } from './../../models/lista-item.model';
import { DeseoService } from 'src/app/services/deseo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: string;

  constructor(private deseoService: DeseoService,
              private route: ActivatedRoute) {

    const idLista = this.route.snapshot.paramMap.get('idLista');
    
    this.lista = this.deseoService.obtenerLista(idLista);
  }

  ngOnInit() {
  }

  agregarItem() {
    if(this.nombreItem.length != 0) {

      const nuevoItem = new ListaItem(this.nombreItem);

      this.lista.items.push(nuevoItem);

      this.nombreItem = '';

      this.deseoService.insertarListas();
    }
  }

  cambioCheck( item: ListaItem ) {
    const pendientes = this.lista.items.filter( itemData => !itemData.completado)
                                       .length;

    if(pendientes === 0) {
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    }
    else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }

    this.deseoService.insertarListas();
  }

  eliminarItem( i: number ) {
    this.lista.items.splice(i, 1);
    
    this.deseoService.insertarListas();
  }
}
