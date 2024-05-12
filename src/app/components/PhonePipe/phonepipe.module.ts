import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { PhonePipeComponent } from './phonepipe.component';



@NgModule({
  declarations: [PhonePipeComponent],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports:[
    PhonePipeComponent,
    
  ]
})
export class PhonePipeModule { }
