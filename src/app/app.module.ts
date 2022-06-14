import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { MessagesComponent } from './messages/messages.component';
import { EstudanteDetailComponent } from './estudante-detail/estudante-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfessoresComponent } from './professores/professores.component';
import { ProfessorDetailsComponent } from './professor-details/professor-details.component';
import { HttpClientModule } from '@angular/common/http';
import { EstudanteCreateComponent } from './estudante-create/estudante-create.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    MessagesComponent,
    EstudanteDetailComponent,
    DashboardComponent,
    ProfessoresComponent,
    ProfessorDetailsComponent,
    EstudanteCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
