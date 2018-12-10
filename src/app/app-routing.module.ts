import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormationComponent } from './formation/create-formation/create-formation.component';
import { ListFormationComponent } from './formation/list-formation/list-formation.component';
import { FormationComponent } from './formation/formation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'formation/create',
    pathMatch: 'full'
  },
  {
    path: 'formation',
    component: FormationComponent,
    children: [
      {
        path: 'create',
        component: CreateFormationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
