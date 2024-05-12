import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { FiltroPadrao } from '../models/Filtros/FiltroPadrao';
import { GraficosDash } from '../models/GraficosDash/GraficosDash';
import { LoginAcesso, Token } from '../models/login/login-acesso';
import { PopupMsn } from '../models/PopupMsn/PopupMsn';
import { UsuarioAnalistaModel } from '../models/usuario/UsuarioAnalistaModel';


import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class CadastroAnalistaService {

  getData(): string {
    return this.dataAtualFormatada()
  }

  dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length == 1 ? '0' + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length == 1 ? '0' + mes : mes,
      anoF = data.getFullYear(),
      horas = new Date().getHours(),
      horasF = horas < 10 ? '0' + horas : horas,
      minutos = new Date().getMinutes(),
      minutosF = minutos < 10 ? '0' + minutos : minutos,
      segundos = new Date().getSeconds(),
      segundosF = segundos < 10 ? '0' + segundos : segundos
    return anoF + mesF + diaF + horasF + minutosF + segundosF
  }

 

  public dataLoginAcesso: any;
  private readonly baseUrl = environment["endPoint"];

  private readonly usuario = 'Usuario';

  private userAuthenticated: boolean = false;
  adminAccess = new EventEmitter<boolean>();

  constructor(
    private httpClient: HttpClient) { }

  
  // Tela de Cadastro de Analistas
  InsertUser(UsuarioAnalistaModel:UsuarioAnalistaModel) {
    return this.httpClient.post<any>(`${this.baseUrl}/${this.usuario}/InsertUserAnalyst`, UsuarioAnalistaModel)
  }

  UpdateUser(UsuarioAnalistaModel:UsuarioAnalistaModel) {
    return this.httpClient.post<any>(`${this.baseUrl}/${this.usuario}/UpdateUserAnalyst`, UsuarioAnalistaModel)
  }

  UserForDelete(UsuarioAnalistaModel:UsuarioAnalistaModel) {
    return this.httpClient.post<any>(`${this.baseUrl}/${this.usuario}/UserForDeleteAnalyst`, UsuarioAnalistaModel)
  }

  ListUsers(UsuarioAnalistaModel:UsuarioAnalistaModel) {
    return this.httpClient.post<Array<UsuarioAnalistaModel>>(`${this.baseUrl}/${this.usuario}/ListUsersAnalyst`, UsuarioAnalistaModel)
  }



}