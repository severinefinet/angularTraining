import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormationComponent } from './formation/create-formation/create-formation.component';
import { ListFormationComponent } from './formation/list-formation/list-formation.component';

const routes: Routes = [
  {
    path: 'formation',
    component: ListFormationComponent,
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
