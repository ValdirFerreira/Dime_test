import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FiltroPadrao } from '../models/Filtros/FiltroPadrao';
import { GrupoColunas } from '../models/GraficoBaseMode/GrupoColunas';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashBoardFourService {

  constructor(public httpClient: HttpClient,
    public httpClient2: HttpClient,
    private handler: HttpBackend,
    private authService: AuthService,) {
    this.httpClient2 = new HttpClient(handler);
  }

  private readonly baseUrl = environment["endPoint"];

  
  carregarGraficoFornecedor(filtro: FiltroPadrao) {
    return this.httpClient.post<GrupoColunas>(
      `${this.baseUrl}/DashBoardFour/CarregarGraficoFornecedor/`,
      filtro
    );
  }
 
  
}
