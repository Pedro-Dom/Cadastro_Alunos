import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { MessagesComponent } from './messages/messages.component';
import { EstudanteDetailComponent } from './estudante-detail/estudante-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    MessagesComponent,
    EstudanteDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
