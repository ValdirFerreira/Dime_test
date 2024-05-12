import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PadraoComboFiltro } from '../models/padrao-combo-filtro/padrao-combo-filtro';
import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ParamGeralFiltro } from './param-filtro';
import { Session } from '../pages/home/guards/session';
import * as moment from 'moment';
import { UsuarioModel } from '../models/usuario/UsuarioModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FiltroGlobalService {

  public infoPopupCalendar: string = "0%";


  private _dtExpires: string;

  public porcInicio: number = 0;

  public porcFinal: string = "0%";


  public filtroMobileAtivo: boolean = false;

  public filtroEmitter: boolean = true;


  public modeFullscreen: boolean = false;


  public listaTipoColeta: Array<PadraoComboFiltro>;
  //MODEL
  public ModelTipoColeta: PadraoComboFiltro;

  public listaStatus: Array<PadraoComboFiltro>;
  //MODEL
  public ModelStatus: Array<PadraoComboFiltro>;

  public listaSL: Array<PadraoComboFiltro>;
  //MODEL
  public ModelSL: Array<PadraoComboFiltro>;

  public listaAno: Array<PadraoComboFiltro>;
  //MODEL
  public ModelAno: Array<PadraoComboFiltro>;

  public listaMes: Array<PadraoComboFiltro>;
  //MODEL
  public ModelMes: Array<PadraoComboFiltro>;


  public listaAnalista: Array<PadraoComboFiltro>;
  //MODEL
  public ModelAnalista: Array<PadraoComboFiltro>;

  public listaGerenteSL: Array<PadraoComboFiltro>;
  //MODEL
  public ModelGerenteSL: Array<PadraoComboFiltro>;

  public listaCoordenador: Array<PadraoComboFiltro>;
  //MODEL
  public ModelCoordenador: Array<PadraoComboFiltro>;

  // LISTA BANCO ANTIGA ABAIXO
  public listaTarget: Array<PadraoComboFiltro>;
  //MODEL
  public ModelTarget: Array<PadraoComboFiltro>;

  public listaOnda: Array<PadraoComboFiltro>;
  //MODEL
  public ModelOnda: PadraoComboFiltro;

  public listaMarcas: Array<PadraoComboFiltro>;
  //MODEL
  public ModelMarcas: PadraoComboFiltro;

  public listaDemografico: Array<PadraoComboFiltro>;
  //MODEL
  public ModelDemografico: Array<PadraoComboFiltro>;

  public listaRegiao: Array<PadraoComboFiltro>;
  //MODEL
  public ModelRegiao: Array<PadraoComboFiltro>;


  public ModelDataInicio: Date;

  public ModelDataFim: Date;


  public TimeOutMonitoGlobal: any;

  private environmentAccess: string[] = ['DEV', 'HML', 'PROD'];

  public portalAcesso: number = 0; // 0 Volumetria, 1 BMR

  constructor(public httpClient: HttpClient, public httpClient2: HttpClient,
    handler: HttpBackend, private session: Session, private router: Router,) {
    this.httpClient2 = new HttpClient(handler);
  }

  private readonly baseUrl = environment["endPoint"];


  iniciarSessaoUser() {
    this.DtExpires = moment().add(300, 'minutes').format();
  }


  public validEmitter() {
    if (!this.filtroEmitter) {
      this.filtroEmitter = true;
    }
    else {
      this.filtroEmitter = false;
    }
    return this.filtroEmitter;
  }


  private carregaParametrosFiltro() {

    var paramGeralFiltro = new ParamGeralFiltro();
    paramGeralFiltro.CodIdiomaParam = 1; //COLOCAMOS O CÓDIGO 1 PORQUE E DEFAULT PORTUGUES DO PROJETO

    let _session = this.session.getSession();
    if (_session !== null) {
      paramGeralFiltro.CodUserParam = _session.CodUser;
    }
    return paramGeralFiltro;
  }

  //get;set DtExpires
  set DtExpires(dtExpires: string) {

    if (this.environmentAccess.includes(environment.local))
      localStorage.setItem('dtExpires', dtExpires);

    this._dtExpires = dtExpires;
  }

  get DtExpires() {
    if (this.environmentAccess.includes(environment.local))
      this._dtExpires = localStorage.getItem('dtExpires') || '';

    return this._dtExpires;
  }



  FiltroTipoColeta() {
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroTipoColeta/`,
      this.carregaParametrosFiltro()
    );
  }

  FiltroStatus(codGraficoParam: number) {
    var paramGeralFiltro = this.carregaParametrosFiltro()
    paramGeralFiltro.CodGraficoParam = codGraficoParam

    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroStatus/`,
      paramGeralFiltro
    );
  }

  FiltroSL(codGraficoParam: number) {
    var paramGeralFiltro = this.carregaParametrosFiltro()
    paramGeralFiltro.CodGraficoParam = codGraficoParam
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroSL/`,
      paramGeralFiltro
    );
  }

  FiltroAno() {
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroAno/`,
      this.carregaParametrosFiltro()
    );
  }

  FiltroMes() {
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroMes/`,
      this.carregaParametrosFiltro()
    );
  }


  FiltroAnalista(CodSLParam: Array<PadraoComboFiltro>) {
    var paramGeralFiltro = this.carregaParametrosFiltro()
    paramGeralFiltro.CodSLParam = CodSLParam

    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroAnalista/`,
      paramGeralFiltro
    );
  }

  FiltroCoordenador(CodSLParam: Array<PadraoComboFiltro>) {
    var paramGeralFiltro = this.carregaParametrosFiltro()
    paramGeralFiltro.CodSLParam = CodSLParam

    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroCoordenador/`,
      paramGeralFiltro
    );
  }

  FiltroGerenteSL(CodSLParam: Array<PadraoComboFiltro>) {
    var paramGeralFiltro = this.carregaParametrosFiltro()
    paramGeralFiltro.CodSLParam = CodSLParam

    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroGerenteSL/`,
      paramGeralFiltro
    );
  }





  /// FILTROS ANTIGOS ABAIXO 
  FiltroTarget() {
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroTarget/`,
      this.carregaParametrosFiltro()
    );
  }

  FiltroOnda() {
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroOnda/`,
      this.carregaParametrosFiltro()
    );
  }

  FiltroMarcas(modelRegiao: Array<PadraoComboFiltro>) {
    var filtro = this.carregaParametrosFiltro();
    filtro.Regiao = modelRegiao;
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroMarcas/`,
      filtro
    );
  }


  FiltroDemografico() {
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroDemografico/`,
      this.carregaParametrosFiltro()
    );
  }

  FiltroRegiao() {
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroRegiao/`,
      this.carregaParametrosFiltro()
    );
  }

  FiltroAtributos(tipoBia: number) {
    var param = this.carregaParametrosFiltro();
    param.ParamBIA = tipoBia
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroAtributos/`,
      param
    );
  }


  FiltroBVC() {
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroBVC/`,
      this.carregaParametrosFiltro()
    );
  }

  FiltroSTB(modelOnda: PadraoComboFiltro) {
    var filtro = this.carregaParametrosFiltro();
    filtro.CodOndaParam = modelOnda.CodItem;
    return this.httpClient.post<Array<PadraoComboFiltro>>(
      `${this.baseUrl}/filtros/FiltroSTB/`,
      filtro
    );
  }


  verificaAcessoVolumetria() {
    var userSession = this.session.getUserSession() as UsuarioModel;
    if (userSession) {
      if (userSession.DashboardVolumetria != 1 || this.portalAcesso != 1) {
        this.router.navigate(['/home']);
      }
    }
  }

  verificaAcessoBMR() {
    var userSession = this.session.getUserSession() as UsuarioModel;
    if (userSession) {
      if (userSession.DashboardBMR != 1 || this.portalAcesso != 2) {
        this.router.navigate(['/home']);
      }
    }
  }

  acessoVolumetria() {

    var userSession = this.session.getUserSession() as UsuarioModel;
    if (userSession) {
      return userSession.DashboardVolumetria;
    }
    return 0;
  }

  acessoBMR() {
    var userSession = this.session.getUserSession() as UsuarioModel;
    if (userSession) {
      return userSession.DashboardBMR;
    }
    return 0;
  }


}