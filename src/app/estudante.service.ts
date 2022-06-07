import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { ESTUDANTES } from './mock-estudantes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  constructor(private messageService: MessageService) { }

  getEstudantes(): Observable<Estudante[]> {
    const estudantes = of(ESTUDANTES);
    this.messageService.add('AdviceService: fetched estudantes');
    return estudantes;
  }

  getEstudante(id: number): Observable<Estudante> {
    const estudante = ESTUDANTES.find(h => h.id === id)!;
    this.messageService.add(`EstudanteService: fetched estudante id=${id}`);
    return of(estudante);
  }
}
