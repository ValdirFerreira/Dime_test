import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ColunaDinamica } from 'src/app/models/GraficoBaseMode/GrupoColunas';
import { GraficoColunasModel } from 'src/app/models/GraficoColunasModel/GraficoColunasModel';
import { LegendaGrafico } from 'src/app/models/LegendaGrafico/LegendaGrafico';


@Component({
    selector: 'legenda-grafico',
    templateUrl: './legenda-grafico.component.html',
    styleUrls: ['./legenda-grafico.component.scss']
})
export class LegendaGraficoComponent implements OnInit {


    constructor(
        private translate: TranslateService
      ) { }

    @Input() legendaGrafico: Array<ColunaDinamica>;


    ngOnInit(): void {
       // this.mokados();
    }

    // descricoes = ["Approved", "In Plalning", "In Progress", "In Progress PC", "Paused", "Client", "Processing", "Analyse"];
    //  cores = ["#2D9CDB", "#FFB800", "#16C7B1", "#9CC69B", "#E94782", "#6E778B", "#9B51E0", "#6A0136"]

    // mokados() {

    //     var lista = [];

    //     for (let index = 0; index < 8; index++) {

    //         var item = new LegendaGrafico();
    //         item.Descricao = this.descricoes[index];
    //         item.Cor = this.cores[index];

    //         lista.push(item);
    //     }

    //     this.legendaGrafico = lista;
    // }

}