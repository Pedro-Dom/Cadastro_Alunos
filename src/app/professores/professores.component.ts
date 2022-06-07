import { Component, OnInit } from '@angular/core';
import { Professor } from '../professor';
import { MessageService } from '../message.service';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})

export class ProfessoresComponent implements OnInit {
  
  selectedProfessor?: Professor;

  professores: Professor[] = [];

  constructor(private professorService: ProfessorService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProfessores();
  }

  onSelect(professor: Professor): void {
    this.selectedProfessor = professor;
    this.messageService.add(`ProfessoresComponent: Selected professor id=${professor.id}`);
  }

  getProfessores(): void {
    this.professorService.getProfessores()
        .subscribe(professores => this.professores = professores);
  }
}
