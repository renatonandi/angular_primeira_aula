import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JovendevTitleComponent } from './jovendev-title/jovendev-title.component';
import { FormsModule } from '@angular/forms';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { CalculoImcComponent } from './calculo-imc/calculo-imc.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNdForComponent } from './diretiva-nd-for/diretiva-nd-for.component';
import { DiretivaNdIfComponent } from './diretiva-nd-if/diretiva-nd-if.component';
import { DiretivaNdModelComponent } from './diretiva-nd-model/diretiva-nd-model.component';
import { DiretivaNdStyleComponent } from './diretiva-nd-style/diretiva-nd-style.component';
import { DiretivaNdSwitchComponent } from './diretiva-nd-switch/diretiva-nd-switch.component';
import { DiretivaNdPipesComponent } from './diretiva-nd-pipes/diretiva-nd-pipes.component';
import { DiretivaNdMicrowaveComponent } from './diretiva-nd-microwave/diretiva-nd-microwave.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    JovendevTitleComponent,
    ExemploBindingComponent,
    CalculoImcComponent,
    DiretivaNgClassComponent,
    DiretivaNdForComponent,
    DiretivaNdIfComponent,
    DiretivaNdModelComponent,
    DiretivaNdStyleComponent,
    DiretivaNdSwitchComponent,
    DiretivaNdPipesComponent,
    DiretivaNdMicrowaveComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
