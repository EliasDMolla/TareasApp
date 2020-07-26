import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { RegistroService } from 'src/app/_services/registro.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario = new Usuario();
  confirmarContrasenia;

  constructor(private registroService: RegistroService,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  async registrarUsuario() {

    const toast = await this.toastController.create({
      message: 'No coinciden las contraseñas',
      color: 'danger',
      duration: 1000
    });

    if(this.usuario.contrasenia != this.confirmarContrasenia) {
      toast.present();
    }

    this.registroService.Registro(this.usuario).subscribe(response => {

      console.log(response);
      
    })
  }
}
