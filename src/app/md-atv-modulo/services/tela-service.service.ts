import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelaServiceService {
  public emitEvent = new EventEmitter();

  private lista: Array<{nome: string, idade: number}> = [];

  private pessoa = {
    nome: '',
    idade: null
  }

  public getLista(){
    return this.lista;
  }
  public carregaPessoa(pessoa: any) {
    this.pessoa.nome = pessoa.nome;
    this.pessoa.idade = pessoa.idade;
    this.emitEvent.emit(this.pessoa)
    console.log(pessoa)
  }

  public adiciona(pessoa: any){
    this.lista.push(pessoa);
    this.emitEvent.emit(pessoa);
}

  constructor() { }
}
