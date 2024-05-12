import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadArquivoService } from 'src/app/services/download-arquivo.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { MenuService } from 'src/app/services/menu.service';
import { saveAs } from "file-saver";
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { Session } from 'src/app/pages/home/guards/session';
import { UsuarioModel } from 'src/app/models/usuario/UsuarioModel';
import { FiltroGlobalService } from 'src/app/services/filtro-global.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() home: boolean = false;

  constructor(public router: Router, public menuService: MenuService, private downloadArquivoService: DownloadArquivoService, private authService: AuthService,
    private translate: TranslateService,
    private session: Session,
    public filtroService: FiltroGlobalService,
  ) {
    // this.router.events.subscribe((event) => {
    //   translate.setDefaultLang('por');
    //   this.translate.use('por');
    // });
  }

  filtroMobileAtivo: boolean = false;
  administrador: boolean = false;


  acessoVolumetria: number = 0;
  acessoBMR: number = 0;

  ngOnInit(): void {
    // var userSession = this.session.getUserSession() as UsuarioModel;
    // this.administrador = userSession.CodUserPerfil == 1;
    // this.acessoVolumetria = this.filtroService.acessoVolumetria();
    // this.acessoBMR = this.filtroService.acessoBMR();
  }

  selecionaMenu(menu: number) {
    this.menuService.activeMenu = menu;
    this.menuService.menuSelecao = menu.toString();

    clearTimeout(this.filtroService.TimeOutMonitoGlobal);


    if (menu == 1) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-one');
      this.router.navigate(['/dashboard-one']);
    }

    if (menu == 2) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-two');
      this.router.navigate(['/dashboard-two']);
    }

    if (menu == 3) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-three');
      this.router.navigate(['/dashboard-three']);
    }

    if (menu == 4) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-four');
      this.router.navigate(['/dashboard-four']);
    }

    if (menu == 5) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-five');
      this.router.navigate(['/dashboard-five']);
    }

    if (menu == 6) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-six');
      this.router.navigate(['/dashboard-six']);
    }

    if (menu == 7) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-seven');
      this.router.navigate(['/dashboard-seven']);
    }


    if (menu == 10) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-seven');
      this.router.navigate(['/usuario']);
    }

    if (menu == 11) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-calendar');
      this.router.navigate(['/calendar']);
    }

    if (menu == 12) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-tabela-tarefas-diarias');
      this.router.navigate(['/tarefas-diaria']);
    }

    if (menu == 13) {
      this.menuService.nomePage = this.translate.instant('navbar.dashboard-cadastro-analista');
      this.router.navigate(['/cadastro-analista']);
    }


    //  MENUS NOVO PORTAL

    if (menu == 14) {
      this.menuService.nomePage = this.translate.instant('navbar.importacao');
      this.router.navigate(['/importacao']);
    }

  }


  selecionaVolumetria(menu: number) {
    this.filtroService.portalAcesso = 1;
    this.selecionaMenu(menu);
  }

  selecionaBMR(menu: number) {
    this.filtroService.portalAcesso = 2;
    this.selecionaMenu(menu);
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


    if (this.filtroMobileAtivo) {
      this.filtroMobileAtivo = false;
      var el = document.getElementById('global-filter')
      if (el != null)
        el.classList.add('filter-close')
    }

  }




  sairPortal() {
    this.authService.limparDadosUsuario();
    this.router.navigate(['/login']);
  }


}
