import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss']
})
export class ExemploBindingComponent {
  public n1: number = 10;

  public n2: number = 15;

  public texto: String = "";

  public incrementaCinco() {
    this.n1 += 5;
    this.n2 += 5;
  }
  public decrementaCinco() {
    this.n1 -= 5;
    this.n2 -= 5;
  }

  public urlImg(): String {
    if (this.n1 + this.n2 > 50) {
      return "data:image/jpeg;base64,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";
    }else{
      return "data:image/jpeg;base64,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";
    }
  }

}
