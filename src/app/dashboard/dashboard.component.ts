import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';
import { Professor } from '../professor';
import { ProfessorService } from '../professor.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  estudantes: Estudante[] = [];
  professores: Professor[] = [];

  constructor(private estudanteService: EstudanteService, private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.getEstudantes();
    this.getProfessores();
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
      .subscribe(estudantes => this.estudantes = estudantes.slice(1, 5));
  }

  getProfessores(): void {
    this.professorService.getProfessores()
      .subscribe(professores => this.professores = professores.slice(11, 15));
  }
}