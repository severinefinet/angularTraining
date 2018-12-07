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
  mesFormations: Formation[];

  constructor() { }

  ngOnInit() {
    this.formation = {
      title: 'MyFirstFormation0',
      description: "Sur Angular0",
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now())
    }
    this.formations = [this.formation]
    this.mesFormations = [
      this.formation, this.formation
    ];
  }

  envoyerFormationAuServeur(formation: Formation) {
    this.formation = formation;
    this.formations.push(formation);
  }
}
