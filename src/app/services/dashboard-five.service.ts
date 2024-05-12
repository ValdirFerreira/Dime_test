import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FiltroPadrao, FiltroPadraoFullLoad } from '../models/Filtros/FiltroPadrao';
import { GraficoColunaModel } from '../models/grafico-coluna/grafico-coluna';
import { GraficoImagemPosicionamento } from '../models/grafico-Imagem-posicionamento/GraficoImagemPosicionamento';
import { GrupoColunas } from '../models/GraficoBaseMode/GrupoColunas';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashBoardFiveService {

  constructor(public httpClient: HttpClient,
    public httpClient2: HttpClient,
    private handler: HttpBackend,
    private authService: AuthService,) {
    this.httpClient2 = new HttpClient(handler);
  }

  private readonly baseUrl = environment["endPoint"];


  carregarGraficoInsights(filtro: FiltroPadrao) {
    return this.httpClient.post<Array<GrupoColunas>>(
      `${this.baseUrl}/DashBoardFive/CarregarGraficoInsights/`,
      filtro
    );
  }

 


 
  
}
