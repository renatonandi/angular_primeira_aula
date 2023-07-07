import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-nd-for',
  templateUrl: './diretiva-nd-for.component.html',
  styleUrls: ['./diretiva-nd-for.component.scss']
})
export class DiretivaNdForComponent {
  times = [
    { nome: 'Time A', vitorias: 0 },
    { nome: 'Time B', vitorias: 0 },
    { nome: 'Time C', vitorias: 0 },
    { nome: 'Time D', vitorias: 0 }
  ];

  adicionarVitoria(time: any) {
    time.vitorias++;
  }

}
