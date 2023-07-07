import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-nd-style',
  templateUrl: './diretiva-nd-style.component.html',
  styleUrls: ['./diretiva-nd-style.component.scss']
})
export class DiretivaNdStyleComponent {
  public radius: number = 50;

  redondo() {
    this.radius += 10;
  }

  quadrado() {
    this.radius -= 10;
  }
}
