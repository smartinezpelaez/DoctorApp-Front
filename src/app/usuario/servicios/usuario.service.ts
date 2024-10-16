import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';
import { Sesion } from '../interfaces/sesion';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

 baseUrl : string = enviroment.apiUrl+'usuario/'

  constructor(private http: HttpClient) { }

  iniciarSeccion(request: Login): Observable<Sesion>{
    return this.http.post<Sesion>(`${this.baseUrl}login`, request);
  }
}
