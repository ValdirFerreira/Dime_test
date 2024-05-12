import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegendaGraficoComponent } from './legenda-grafico.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LegendaGraficoComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [LegendaGraficoComponent]
})

export class LegendaGraficoModule { }
