import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RowTable, TableDataInfo } from 'src/app/models/TableDataInfo/TableDataInfo';
import { Session } from 'src/app/pages/home/guards/session';

@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'],
})
export class DialogContentComponent implements OnInit {
  dialogType: number = 2;
  IdEdicaoEntrevistador: number = 0;
  Area: string = '';


  login: string;
  senha: string;
  observacao: string;
  observacaoValid: boolean = false;

  loginValid: boolean = false;
  senhaValid: boolean = false;
  mostraSenha: boolean = false;

  qtdCaracteresObs: number = 0;




  tabela: Array<RowTable>;

  constructor(

    private dialogRef: MatDialogRef<DialogContentComponent>,
    private session: Session,
    public dialog: MatDialog,
  ) { }


  countLine: number = 1;
  page: number = 1;
  config: any;
  itemsPorPagina = 1;

  id: string;
  ngOnInit(): void {

    this.id = this.gerarIdParaConfigDePaginacao();
    this.config = {
      id: this.id,
      currentPage: this.page,
      itemsPerPage: this.itemsPorPagina
    };



    this.dadosTeste();

  }



  dadosTeste() {
    const SimulandoDadosBanco: TableDataInfo[] = [];
    const rows: RowTable[] = [];

    for (let index = 0; index < 20; index++) {
      const item = new TableDataInfo();
      item.RazonSocial = "Arthur J. Gallagher Perú Corredores de Reaeguros S.A.";
      item.NombreComercial = "Beta Solutions";
      item.RUC = "10987654321";
      item.Contacto = "Ana Martinez";
      item.Cargo = "Directora General";
      item.Direccion = "Avenida Siempre Viva 456";
      item.Distrito = "San Isidro";
      item.Departamento = "Lima";
      item.Telefono = "912345678";
      item.ActividadEconomica = "Consultoría";
      item.Site = "www.betasolutions.com";
      item.Fundacion = "2010";
      item.GerenteGeneral = "Carlos Gomez";

      SimulandoDadosBanco.push(item);
    }


    var cont = 1;
    var listtablePage= [];
    SimulandoDadosBanco.forEach(x => {


      if (cont <= 4) {
        listtablePage.push(x);
        cont++;
      }
      else {

        var itemTable = new RowTable();
        itemTable.tableData = listtablePage;
        rows.push(itemTable);

        listtablePage= [];
        cont = 1;
      }

    })

    this.tabela = rows;

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

  mudarPage(event: any) {
    this.page = event;
    this.config.currentPage = this.page;
  }

  public mudarItemsPorPage() {
    this.page = 1
    this.config.currentPage = this.page;
    this.config.itemsPerPage = this.itemsPorPagina;
  }


  onInputFocus(event: any) {
    event.target.removeAttribute('readonly');
  }



  closeDialog() {
    //Write your stuff here
    this.dialogRef.close(); // <- Closes the dialog
  }



  redirectOptionItem(opcao: number) {

    this.openDialog(opcao);
  }


  openDialog(dialogType: number) {
    // reference https://material.angular.io/components/dialog/examples    
    // const dialogRef = this.dialog.open(DialogGenericoComponent);
    // dialogRef.componentInstance.dialogType = dialogType;
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    //  const dialogRef = this.dialog.open(SearchDialogComponent, { disableClose: true });
  }

}
