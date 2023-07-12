import { Component, OnInit } from '@angular/core';
import { TelaServiceService } from '../services/tela-service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent implements OnInit{
  
  public listaUsuario = {
    nome: "",
    idade: null
  } 
  
  constructor(private service: TelaServiceService){ }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: any) => this.listaUsuario = res
    })
  }

  public addItem(valor: any){
    let lista = {
      nome: valor.nome,
      idade: valor.idade
    }

    this.listaUsuario = {
      nome: "",
      idade: null
    }

    return this.service.adiciona(lista)
  }

  public removeAll(){
    this.service.removeAll;
  }

  

}
