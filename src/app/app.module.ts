import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Module de gestion de form angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CreateFormationComponent } from './formation/create-formation/create-formation.component';
import { ListFormationComponent } from './formation/list-formation/list-formation.component';
import { FormationTitlePipe } from './formation/list-formation/pipes/formation-title.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    UtilisateurComponent,
    CreateFormationComponent,
    ListFormationComponent,
    FormationTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
