import { Injectable } from '@angular/core';
import { Professor } from './professor';
import { PROFESSORES } from './mock-estudantes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private messageService: MessageService) { }

  getProfessores(): Observable<Professor[]> {
    const professores = of(PROFESSORES);
    this.messageService.add('AdviceService: fetched professores');
    return professores;
  }

  getProfessor(id: number): Observable<Professor> {
    const professor = PROFESSORES.find(h => h.id === id)!;
    this.messageService.add(`ProfessorService: fetched professor id=${id}`);
    return of(professor);
  }
}
