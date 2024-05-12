import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    NavbarComponent,
    
  ],
  imports: [
    CommonModule,
     TranslateModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,


  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
