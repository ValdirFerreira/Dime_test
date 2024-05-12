import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvisoSemDadosComponent } from './aviso-sem-dados.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [AvisoSemDadosComponent],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports:[
    AvisoSemDadosComponent,
    
  ]
})
export class AvisoSemDadosModule { }
