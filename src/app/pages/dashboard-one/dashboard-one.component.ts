import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { FiltroPadrao } from 'src/app/models/Filtros/FiltroPadrao';
import { saveAs } from "file-saver";
import { FiltroGlobalService } from 'src/app/services/filtro-global.service';
import { MenuService } from 'src/app/services/menu.service';
import { DownloadArquivoService } from 'src/app/services/download-arquivo.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { TranslateService } from '@ngx-translate/core';
import { ConversorPowerpointService } from 'src/app/services/conversor-powerpoint.service';
import { LogService } from 'src/app/services/log.service';
import { GraficoColunasModel } from 'src/app/models/GraficoColunasModel/GraficoColunasModel';
import { GraficoMonitor } from 'src/app/models/usuario/graficoMonitor';
import { ConfigMonitorModel } from 'src/app/models/ConfigMonitorModel/ConfigMonitorModel';
import { ConfigMonitorService } from 'src/app/services/configMonitor.service';
import { AuthService } from 'src/app/services/auth.service';
import { Session } from '../home/guards/session';
import { ColunaDinamica, GrupoColunas } from 'src/app/models/GraficoBaseMode/GrupoColunas';
import { PadraoComboFiltro } from 'src/app/models/padrao-combo-filtro/padrao-combo-filtro';
import { DashBoardTwoService } from 'src/app/services/dashboard-two.service';
import { DashBoardFourService } from 'src/app/services/dashboard-four-service';
import { DashBoardSixService } from 'src/app/services/dashboard-six.service';
import { DashBoardFiveService } from 'src/app/services/dashboard-five.service';
import { DashBoardThreeService } from 'src/app/services/dashboard-three.service';
import { DashBoardSevenService } from 'src/app/services/dashboard-seven.service';



@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.scss']
})
export class DashboardOneComponent implements OnInit {

  graficoColunaModel: Array<GraficoColunasModel>;
  listMokCompleta: any;

  qtdTotalGraficos: number = 4;
  nGrafico: number = 0;

  listaGraficoMonitor: Array<GraficoMonitor>;

  graficosUsuario = [];
  graficoAtivo: number = 0;
  qtdMinutoAtualizacao: number = 1000 * 5;

  progress: boolean = false;

  constructor(public router: Router,
    public menuService: MenuService,
    private translate: TranslateService, private conversorPowerpointService: ConversorPowerpointService,
    private logService: LogService,
    public configMonitorService: ConfigMonitorService,
    public authService: AuthService,
    private session: Session,
   

  ) { }



  ngOnInit(): void {

    // window.scroll({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });

    
  }

 
  

}
