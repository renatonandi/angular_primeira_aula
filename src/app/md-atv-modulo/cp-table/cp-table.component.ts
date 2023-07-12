import { Component, OnInit } from '@angular/core';
import { TelaServiceService } from '../services/tela-service.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit{
  public lista: Array<{nome: string, idade: number}> = [];

  constructor(private service: TelaServiceService) { }
  
  carregaPessoa(pessoa: any) {
    this.service.carregaPessoa(pessoa)
  }

  ngOnInit(): void {
    this.lista = this.service.getLista();
  }

}
