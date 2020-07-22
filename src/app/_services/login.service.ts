import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  Login() {
    //return this.http.post<any>(`https://localhost:5001/WeatherForecast`);
  }

  GetData(): Observable<any> {
    //return this.http.get<any>(`${environment.apiLocal}/WeatherForecast/`);
    return this.http.get<any>(`https://localhost:5001/WeatherForecast`);
  }
}
