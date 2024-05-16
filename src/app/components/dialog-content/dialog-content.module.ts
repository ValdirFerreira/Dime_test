import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContentComponent } from './dialog-content.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    DialogContentComponent,
    
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,


  ],
  exports: [
    DialogContentComponent
  ]
})
export class DialogContentModule { }
