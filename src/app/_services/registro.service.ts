import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

  Registro(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`https://localhost:5001/Registro`, usuario);
  }
}
