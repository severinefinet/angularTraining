import { Component, OnInit } from '@angular/core';
import { Formation } from './models/Formation.model';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  formation: Formation;
  constructor() { }

  ngOnInit() {
    this.formation = {
      title: 'MyFirstFormation',
      description: "Sur Angular",
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now())
    }
  }

  envoyerFormationAuServeur(formation: Formation) {
    this.formation = formation;
    console.log('Parent', formation)
  }
}
