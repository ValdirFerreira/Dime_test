import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DialogElementsDialog } from './dialog-elements';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [DialogElementsDialog],
  imports: [
    CommonModule,
    TranslateModule,
    MatDialogModule
  ],
  exports:[
    DialogElementsDialog,
    
  ]
})
export class DialogElementsDialogModule { }
