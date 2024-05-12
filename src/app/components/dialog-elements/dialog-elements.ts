import {Component,Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FiltroGlobalService } from 'src/app/services/filtro-global.service';


@Component({
  selector: 'dialog-elements',
  templateUrl: './dialog-elements.html',
  styleUrls: ['./dialog-elements.scss']

})

export class DialogElementsDialog {
    constructor(
        public filtroService: FiltroGlobalService,
       
      ) { }


      montaTituloPopup(valor: string) {
        var info = valor.split('[');
    
        if (info.length > 1)
          return info[0];
    
        return valor;
      }
    
      montaDadosPopup(valor: string) {
        var info = valor.split('[');
    
        if (info.length > 1)
          return '[' + info[1];
    
        return valor;
      }
}