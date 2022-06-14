import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudanteDetailComponent } from './estudante-detail/estudante-detail.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ProfessorDetailsComponent } from './professor-details/professor-details.component';
import { EstudanteCreateComponent } from './estudante-create/estudante-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EstudanteDetailComponent },
  { path: 'estudantes', component: EstudantesComponent },
  { path: 'estudantes/create', component: EstudanteCreateComponent },
  { path: 'details/:id', component: ProfessorDetailsComponent },
  { path: 'professores', component: ProfessoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }