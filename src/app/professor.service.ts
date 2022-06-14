import { Injectable } from '@angular/core';
import { Professor } from './professor';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private professoresUrl = 'http://localhost:3000/professores';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.professoresUrl)
  }

  getProfessor(id: number): Observable<Professor> {
    const url = `${this.professoresUrl}/${id}`;
    return this.http.get<Professor>(url)
  }

  createProfessor(professor: Professor ): Observable<Professor>{
    return this.http.post<Professor>(this.professoresUrl, professor)
  }

  updateProfessor(professor: Professor): Observable<Professor> {
    const url = `${this.professoresUrl}/${professor.id}`;
    return this.http.put<Professor>(url, professor)
  }

  deleteProfessor(id: number): Observable<any> {
    const url = `${this.professoresUrl}/${id}`;
    return this.http.delete(url)
  }

}
