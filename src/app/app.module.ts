import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
