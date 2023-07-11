import { Component } from '@angular/core';
import { TelaServiceService } from '../services/tela-service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent {
  public usuario = {
    nome: '',
    idade: null
  } 
  constructor(private service: TelaServiceService){}

  addItem(usuario: any){
    let lista = {
      nome: usuario.nome,
      idade: usuario.idade
    }
    this.usuario = {
      nome:'',
      idade: null
    }
    this.service.adiciona(lista);
  }

}
