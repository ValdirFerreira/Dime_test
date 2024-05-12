import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aviso-sem-dados',
  templateUrl: './aviso-sem-dados.component.html',
  styleUrls: ['./aviso-sem-dados.component.scss']
})
export class AvisoSemDadosComponent implements OnInit {



  
  constructor(private translate: TranslateService,) { }

  ngOnInit(): void {
  }

}
