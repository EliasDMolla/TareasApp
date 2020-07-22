import { Component } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private loginService: LoginService) {}

  onClick() {
    console.log('asdasdsa');
    this.loginService.GetData().subscribe(response => {

      console.log(response);

    }, error => console.error(error));    
  }
}
