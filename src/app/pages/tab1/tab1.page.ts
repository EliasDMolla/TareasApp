import { Router } from '@angular/router';
import { DeseoService } from './../../services/deseo.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router: Router,
              public deseoService: DeseoService,
              public alertController: AlertController) {
  }

  async nuevaLista() {
    
    const alertEjemplo = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    //alertEjemplo.present();

    const alertNuevaLista = await this.alertController.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Ingrese título',
          type: 'text',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Crear',
          handler: ( data ) => {
            if( data.titulo.length === 0) {
              return;
            }
            else {
              const id = this.deseoService.nuevaLista(data.titulo);
              
              this.router.navigateByUrl(`tabs/tab1/agregar/${ id }`);
            } 
          }
        }
      ]
    });

    alertNuevaLista.present();
  }  
}
