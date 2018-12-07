import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Module de gestion de form angular
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CreateFormationComponent } from './formation/create-formation/create-formation.component';


@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    UtilisateurComponent,
    CreateFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
