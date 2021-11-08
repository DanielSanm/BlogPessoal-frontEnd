import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  logar() {
    this.auth.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp

      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status == 500) {
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }

}
