import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private environmentAccess: string[] = ['DEV', 'HML', 'PROD'];

  private usuarioAutenticadoPortal: boolean = false;
  idDefaultLangUser: 1; //COLOCAMOS O CÓDIGO 1 PORQUE E DEFAULT PORTUGUES DO PROJETO
  private token: any;
  private user: any;

  constructor() { }

  UsuarioAutenticado(status: boolean) {
    localStorage.setItem('usuarioAutenticadoPortal', JSON.stringify(status));
    this.usuarioAutenticadoPortal = status;
  }


  UsuarioEstaAutenticado(): Promise<boolean> {
    this.usuarioAutenticadoPortal = localStorage.getItem('usuarioAutenticadoPortal') == 'true';
    return Promise.resolve(this.usuarioAutenticadoPortal);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  get getToken() {
    this.token = localStorage.getItem('token');
    return this.token;
  }


  setUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
    this.user = user;
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem("user"));
    return this.user;
  }


  limparToken() {
    this.token = null;
    this.user = null;
  }

  limparDadosUsuario() {
    this.UsuarioAutenticado(false);
    this.limparToken();
    localStorage.clear();
    sessionStorage.clear();
  }

}