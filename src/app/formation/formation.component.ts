import { Component, OnInit } from '@angular/core';
import { Formation } from './models/Formation.model';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  formation: Formation;
  formations: Formation[];
  constructor() { }

  ngOnInit() {
    this.formation = {
      title: 'MyFirstFormation0',
      description: "Sur Angular0",
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now())
    }
    this.formations = [
      {
        title: 'MyFirstFormation1',
        description: "Sur Angular1",
        startDate: new Date(Date.now()),
        endDate: new Date(Date.now())
      },
      {
        title: 'MyFirstFormation2',
        description: "Sur Angular2",
        startDate: new Date(Date.now()),
        endDate: new Date(Date.now())
      },
      {
        title: 'MyFirstFormation3',
        description: "Sur Angular3",
        startDate: new Date(Date.now()),
        endDate: new Date(Date.now())
      },
      {
        title: 'MyFirstFormation4',
        description: "Sur Angular4",
        startDate: new Date(Date.now()),
        endDate: new Date(Date.now())
      }
    ]
  }

  envoyerFormationAuServeur(formation: Formation) {
    this.formation = formation;
    console.log('Parent', formation)
  }
}
