import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComunicacaoQuadroResumo } from '../models/ComunicacaoQuadroResumo/ComunicacaoQuadroResumo';
import { FiltroPadrao, FiltroPadraoFullLoad } from '../models/Filtros/FiltroPadrao';
import { GraficoColunaModel } from '../models/grafico-coluna/grafico-coluna';
import { GraficoImagemPosicionamento } from '../models/grafico-Imagem-posicionamento/GraficoImagemPosicionamento';
import { GrupoColunas } from '../models/GraficoBaseMode/GrupoColunas';
import { GraficoComunicacaoDiagnostico } from '../models/GraficoComunicacaoDiagnostico/GraficoComunicacaoDiagnostico';
import { GraficoComunicacaoRecall } from '../models/GraficoComunicacaoRecall/GraficoComunicacaoRecall';
import { GraficoComunicacaoVisto } from '../models/GraficoComunicacaoVisto/GraficoComunicacaoVisto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashBoardSevenService {

  constructor(public httpClient: HttpClient,
    public httpClient2: HttpClient,
    private handler: HttpBackend,
    private authService: AuthService,) {
    this.httpClient2 = new HttpClient(handler);
  }

  private readonly baseUrl = environment["endPoint"];



 

  carregarGraficoProjetosAnalistasEvolutivo(filtro: FiltroPadrao) {
    return this.httpClient.post<Array<GrupoColunas>>(
      `${this.baseUrl}/DashBoardSeven/CarregarGraficoProjetosAnalistasEvolutivo/`,
      filtro
    );
  }


  carregarGraficoGerenteSLEvolutivo(filtro: FiltroPadrao) {
    return this.httpClient.post<Array<GrupoColunas>>(
      `${this.baseUrl}/DashBoardSeven/CarregarGraficoGerenteSLEvolutivo/`,
      filtro
    );
  }

  
  
}
