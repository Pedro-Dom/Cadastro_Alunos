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
    this.messageService.add('HeroService: fetched estudantes');
    return estudantes;
  }

  getEstudante(id: number): Observable<Estudante> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const estudante = ESTUDANTES.find(h => h.id === id)!;
    this.messageService.add(`EstudanteService: fetched estudante id=${id}`);
    return of(estudante);
  }
}
