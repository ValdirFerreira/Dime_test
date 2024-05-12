import { Component, Input, OnInit } from '@angular/core';
import { ColunasTabelaPadraoModel, TabelaPadraoModel } from 'src/app/models/tabela-padrao/tabela-padrao-model';


@Component({
  selector: 'tabela-padrao',
  templateUrl: './tabela-padrao.component.html',
  styleUrls: ['./tabela-padrao.component.scss']
})
export class TabelaPadraoComponent implements OnInit {

  @Input('grafico') tabela: TabelaPadraoModel;
  @Input() colunas: Array<string>;
  @Input() paginacao: boolean = true;
  @Input() itemsPorPagina: number = 10;
  @Input() visualizacaoPorMedia: boolean = false;
  ativaTela: boolean = false;
  constructor() { }

  countLine: number = 1;
  page: number = 1;
  config: any;

  id: string;
  ngOnInit(): void {

    this.id = this.gerarIdParaConfigDePaginacao();
    this.config = {
      id: this.id,
      currentPage: this.page,
      itemsPerPage: this.itemsPorPagina
    };

    this.ativaTela = true;
  }

  ngOnChanges() {
    this.page = 1;
    if (this.config) {
      this.config.currentPage = this.page;
    }
  }

  gerarIdParaConfigDePaginacao() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  carregaTabela() {
    var retorno = new TabelaPadraoModel();
    var titulos = [];
    for (let index = 0; index < 20; index++) {
      titulos.push("Titulo Titulo Titulo" + index);
    }

    retorno.Titulos = titulos;


    var linhas = [];
    // Linha
    for (let linha = 0; linha < 25; linha++) {

      var row = new ColunasTabelaPadraoModel();
      var Coluna = [];

      for (let coluna = 0; coluna < 20; coluna++) {
        Coluna.push("DadoDado DadoDado - " + coluna);
      }

      row.Coluna = Coluna;
      linhas.push(row);
    }
    retorno.Linhas = linhas;

    this.tabela = retorno;

    this.ativaTela = true;
  }


  mudarPage(event: any) {
    this.page = event;
    this.config.currentPage = this.page;
  }

  public mudarItemsPorPage() {
    this.page = 1
    this.config.currentPage = this.page;
    this.config.itemsPerPage = this.itemsPorPagina;
  }

}
