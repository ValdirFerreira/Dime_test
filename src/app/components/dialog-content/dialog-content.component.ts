import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
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

  constructor(

    private dialogRef: MatDialogRef<DialogContentComponent>,
        private session: Session,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges() { }



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
