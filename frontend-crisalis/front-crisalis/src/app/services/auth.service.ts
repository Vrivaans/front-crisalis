import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../Models/jwt-dto';
import { LoginUsuario } from '../Models/login-usuario';
import { NuevoUsuario } from '../Models/nuevo-usuario';
//import { JwtDto } from 'src/app/Models/jwt-dto';
//import { LoginUsuario } from 'src/app/Models/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'http://localhost:8080/auth/';
  constructor(private httpClient: HttpClient) {

   }
   public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authUrl+'nuevo', nuevoUsuario)
   }

   public login(loginUser: LoginUsuario): Observable<JwtDto> {
     return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUser);
   }
}
