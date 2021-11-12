import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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
    return this.htpp.post<UsuarioLogin>('https://blogpessoaloficial2.herokuapp.com/usuario/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.htpp.post<Usuario>('https://blogpessoaloficial2.herokuapp.com/usuario/cadastrar', usuario)
  }

  logado() {
    let ok = false

    if(environment.token != '') {
      ok = true
    }

    return ok
  }
}
