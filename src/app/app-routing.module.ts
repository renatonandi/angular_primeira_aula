import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { CalculoImcComponent } from './calculo-imc/calculo-imc.component';
import { DiretivaNdStyleComponent } from './diretiva-nd-style/diretiva-nd-style.component';
import { DiretivaNdModelComponent } from './diretiva-nd-model/diretiva-nd-model.component';
import { DiretivaNdIfComponent } from './diretiva-nd-if/diretiva-nd-if.component';
import { DiretivaNdForComponent } from './diretiva-nd-for/diretiva-nd-for.component';
import { DiretivaNdSwitchComponent } from './diretiva-nd-switch/diretiva-nd-switch.component';
import { DiretivaNdPipesComponent } from './diretiva-nd-pipes/diretiva-nd-pipes.component';
import { DiretivaNdMicrowaveComponent } from './diretiva-nd-microwave/diretiva-nd-microwave.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';

const routes: Routes = [
  { path: 'bindings', component: ExemploBindingComponent},
  { path: 'imc', component: CalculoImcComponent},
  { path: 'style', component: DiretivaNdStyleComponent},
  { path: 'model', component: DiretivaNdModelComponent},
  { path: 'if', component: DiretivaNdIfComponent},
  { path: 'for', component: DiretivaNdForComponent},
  { path: 'switch', component: DiretivaNdSwitchComponent},
  { path: 'pipe', component: DiretivaNdPipesComponent},
  { path: 'microwave', component: DiretivaNdMicrowaveComponent},
  { path: 'class', component: DiretivaNgClassComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
