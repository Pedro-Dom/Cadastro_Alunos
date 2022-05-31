import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { MessageService } from '../message.service';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})
export class EstudantesComponent implements OnInit {
  
  selectedEstudante?: Estudante;

  estudantes: Estudante[] = [];

  //constructor(private estudanteService: EstudantesService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getEstudantes();
  }

  onSelect(estudante: Estudante): void {
    this.selectedEstudante = estudante;
    this.messageService.add(`EstudantesComponent: Selected estudante id=${estudante.id}`);
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
        .subscribe(estudantes => this.estudantes = estudantes);
  }
}