import { Component, Inject, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { FiltroPadrao } from 'src/app/models/Filtros/FiltroPadrao';
import { PadraoComboFiltro } from 'src/app/models/padrao-combo-filtro/padrao-combo-filtro';
import { PopupMsn } from 'src/app/models/PopupMsn/PopupMsn';
import { UsuarioModel } from 'src/app/models/usuario/UsuarioModel';
import { Session } from 'src/app/pages/home/guards/session';

import { AuthService } from 'src/app/services/auth.service';
import { FiltroGlobalService } from 'src/app/services/filtro-global.service';
import { LoginService } from 'src/app/services/login.service';
import { MenuService } from 'src/app/services/menu.service';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input('titulo') tituloPagina: string;
  @Input() pageAtual: string;
  @Input() home: boolean = false;
  filtro: boolean = false;
  @Input() progress: boolean = false;

  @Input() filtroTabela: boolean = false;

  alertaAtivo: boolean = false;
  checkedtourChecked = false;
  mensagem: string = "";

  elem: any;

  constructor(public router: Router,
    private authService: AuthService, public filtroService: FiltroGlobalService,
    public menuService: MenuService, private loginService: LoginService, private session: Session,
    @Inject(DOCUMENT) private document: any
  ) { }

  mesAnoAtualizado: string;

  filtroMobile: boolean = false;


  ngOnInit(): void {

    // var arrayMes = new Array(12);
    // arrayMes[0] = "Janeiro";
    // arrayMes[1] = "Fevereiro";
    // arrayMes[2] = "Março";
    // arrayMes[3] = "Abril";
    // arrayMes[4] = "Maio";
    // arrayMes[5] = "Junho";
    // arrayMes[6] = "Julho";
    // arrayMes[7] = "Agosto";
    // arrayMes[8] = "Setembro";
    // arrayMes[9] = "Outubro";
    // arrayMes[10] = "Novembro";
    // arrayMes[11] = "Dezembro";
    // var data = new Date();
    // this.mesAnoAtualizado = arrayMes[data.getMonth()] + " / " + data.getFullYear().toString();

    // this.checkDevice();

    // //  this.CarregarPopUpMsn();

    // this.elem = document.documentElement;

  }

  ngOnChanges() {
    //  this.CarregarPopUpMsn();

  }


  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }

    this.filtroService.modeFullscreen = true;
  }
/* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
    this.filtroService.modeFullscreen = false;
  }


  checkDevice() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      this.filtroMobile = true; // está utilizando celular
    }
    else {
      this.filtroMobile = false; // não é celular
    }

  }

  CarregarPopUpMsn() {

    var naoVisualizarmensagem = false;

    var userSession = this.session.getUserSession() as UsuarioModel;

    if (userSession) {
      naoVisualizarmensagem = userSession?.FlagPopUp;
    }

    if (!this.router.url.includes('/home') && !this.mensagem && naoVisualizarmensagem) {

      var filtros = new FiltroPadrao();
      filtros.CodUser = this.session.getCodUserSession();
      filtros.CodIdioma = 1;// this.authService.idDefaultLangUser;
      this.loginService.CarregarPopUpMsn(filtros)
        .subscribe((response: PopupMsn) => {

          if (response) {
            this.mensagem = response.DescItem;
            this.alertaAtivo = true;
          }

        }, (error) => console.error(error),
          () => {
          }
        )
    }
  }


  fecharAlerta() {
    this.alertaAtivo = false;
    var userSession = this.session.getUserSession() as UsuarioModel;

    if (userSession && this.checkedtourChecked) {
      userSession.FlagPopUp = false;
      this.loginService.UpdatePopupUser(userSession)
        .subscribe((response: PopupMsn) => {

          this.session.updateSession(userSession);
          this.alertaAtivo = false;

        }, (error) => console.error(error),
          () => {
          }
        )
    }

  }


  closeFilter() {

    this.closeMenu();

    if (this.filtroService.filtroMobileAtivo) {
      this.filtroService.filtroMobileAtivo = false;
      var el = document.getElementById('global-filter')
      if (el != null)
        el.classList.add('filter-close')
    }
    else {
      this.filtroService.filtroMobileAtivo = true;
      var el = document.getElementById('global-filter')
      if (el != undefined)
        el.classList.remove('filter-close')
    }

  }

  setDefaultFiltroTarget() {
    // this.filtroService.ModelTarget = this.filtroService.listaTarget[0];
    // this.filtroService.ModelTarget = null;
    this.filtroService.ModelTarget = new Array<PadraoComboFiltro>();
  }

  setDefaultFiltroRegiao() {
    this.filtroService.ModelRegiao = new Array<PadraoComboFiltro>();
  }

  setDefaultFiltroDemografico() {
    this.filtroService.ModelDemografico = new Array<PadraoComboFiltro>();
  }

  setDefaultFiltroOnda() {
    this.filtroService.ModelOnda = this.filtroService.listaOnda[0];
  }


  goBackHome() {
    clearTimeout(this.filtroService.TimeOutMonitoGlobal);
    // this.router.navigate(['/dashboard-two']);
    this.router.navigate(['/home']);
  }


  closeMenu() {
    var el = document.getElementById("menu-mobile");
    if (el)
      el.classList.remove("active");
  }

  abrirMenuMobile(e: Event) {
    var el = document.getElementById('menu-mobile')
    if (el) {
      el.classList.add('active')
      el.classList.add('clicouabrirmenu')
    }


    if (this.filtroService.filtroMobileAtivo) {
      this.filtroService.filtroMobileAtivo = false;
      var el = document.getElementById('global-filter')
      if (el != null)
        el.classList.add('filter-close')
    }

  }




  sairPortal() {
    this.authService.UsuarioAutenticado(false);
    this.router.navigate(['/loginIpsos']);
  }





}

