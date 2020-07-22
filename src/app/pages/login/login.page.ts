import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  ingresar(){
    // this.loginService.Login().subscribe(response => {
      
    //   console.log(response);
    // }, error => console.error(error));
  }
}
