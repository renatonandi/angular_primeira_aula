import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo-imc',
  templateUrl: './calculo-imc.component.html',
  styleUrls: ['./calculo-imc.component.scss']
})
export class CalculoImcComponent {
  public peso = Number(document.getElementById("txtPeso"));
  public altura = Number(document.getElementById("txtAltura")); 

  public nome: string = "";

  public imc: number = 0;

  public calculaImc() {
    const peso = document.getElementById("txtPeso");
    const altura = document.getElementById("txtAltura");
    this.imc = this.peso / (this.altura ** 2);

    
  }

}
