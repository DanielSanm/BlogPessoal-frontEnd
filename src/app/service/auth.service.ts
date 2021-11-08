import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private htpp: HttpClient
  ) { }

  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.htpp.post<UsuarioLogin>('http://localhost:8080/usuario/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.htpp.post<Usuario>('http://localhost:8080/usuario/cadastrar', usuario)
  }
}
