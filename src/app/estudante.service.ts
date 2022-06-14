import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { ESTUDANTES } from './mock-estudantes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  private estudantesUrl = 'http://localhost:3000/estudantes';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getEstudantes(): Observable<Estudante[]> {
    return this.http.get<Estudante[]>(this.estudantesUrl)
  }

  getEstudante(id: number): Observable<Estudante> {
    const url = `${this.estudantesUrl}/${id}`;
    return this.http.get<Estudante>(url)
  }

  createEstudante(estudante: Estudante ): Observable<Estudante>{
    return this.http.post<Estudante>(this.estudantesUrl, estudante)
  }

  updateEstudante(estudante: Estudante): Observable<Estudante> {
    const url = `${this.estudantesUrl}/${estudante.id}`;
    return this.http.put<Estudante>(url, estudante)
  }

  deleteEstudante(id?: number): Observable<any> {
    const url = `${this.estudantesUrl}/${id}`;
    return this.http.delete(url)
  }

}
