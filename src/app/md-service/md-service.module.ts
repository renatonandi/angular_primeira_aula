import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpAgrupadorComponent } from './cp-agrupador/cp-agrupador.component';
import { CpAComponent } from './cp-a/cp-a.component';
import { CpBComponent } from './cp-b/cp-b.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CpAgrupadorComponent,
    CpAComponent,
    CpBComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MdServiceModule { }
