import { AlertController, IonList } from '@ionic/angular';
import { DeseoService } from './../../services/deseo.service';
import { Router } from '@angular/router';
import { Lista } from './../../models/lista.model';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList, {static: true} ) lista: IonList; // Con esto se llama a cualquier elemento html
  @Input() terminada;
  listas: Lista[] = [];

  constructor(public router: Router,
              public deseoService: DeseoService,
              public alertController: AlertController) {  
    this.listas = deseoService.listas;
  }

  ngOnInit() {}

  verLista( lista: Lista ) {
    if(this.terminada) {
      this.router.navigateByUrl(`tabs/tab2/agregar/${ lista.id }`);
    }
    else {
      this.router.navigateByUrl(`tabs/tab1/agregar/${ lista.id }`);
    }
  }

  eliminarLista( lista: Lista ) {
    this.deseoService.eliminarLista(lista);  
  }

  async editarTituloLista(lista: Lista, slideItem: any) {

    const alertEditar = await this.alertController.create({
      header: 'Editar Título',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            slideItem.close();
          }
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            if(data.titulo.lenth === 0) {
              slideItem.close();
              return false;
            }
            else {
              lista.titulo = data.titulo;
              this.deseoService.insertarListas();
              // this.lista.closeSlidingItems();
              slideItem.close();
            }
          }
        }
      ]
    });


    alertEditar.present();
  }
}
