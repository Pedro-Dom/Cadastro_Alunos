import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudante } from '../estudante';
import { EstudanteService } from '../estudante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudante-create',
  templateUrl: './estudante-create.component.html',
  styleUrls: ['./estudante-create.component.css']
})
export class EstudanteCreateComponent implements OnInit {

  estudante: Estudante = {
    name: "",
    curso: "",
    idade: 0,
    semestre: 0
  }

  constructor(private estudanteService: EstudanteService, private router: Router) {}

  ngOnInit(): void {
  }

  createEstudante(): void{
    this.estudanteService.createEstudante(this.estudante).subscribe(() => {
      this.goBack()
    })
  }

  goBack(): void{
    this.router.navigate(["estudantes"])
  }

}
