import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConfigMonitorModel } from '../models/ConfigMonitorModel/ConfigMonitorModel';
import { FiltroPadrao, FiltroPadraoFullLoad } from '../models/Filtros/FiltroPadrao';
import { GraficoColunaModel } from '../models/grafico-coluna/grafico-coluna';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigMonitorService {

  constructor(public httpClient: HttpClient,
    public httpClient2: HttpClient,
    private handler: HttpBackend,
    private authService: AuthService,) {
    this.httpClient2 = new HttpClient(handler);
  }

  private readonly baseUrl = environment["endPoint"];

  InsertConfigMonitor(filtro: ConfigMonitorModel) {
    return this.httpClient.post<any>(
      `${this.baseUrl}/ConfigMonitor/InsertConfigMonitor/`,
      filtro
    );
  }
 
  ListConfigMonitorByUser(filtro: ConfigMonitorModel) {
    return this.httpClient.post<ConfigMonitorModel>(
      `${this.baseUrl}/ConfigMonitor/ListConfigMonitorByUser/`,
      filtro
    );
  }
  
}
