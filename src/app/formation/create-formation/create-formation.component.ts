import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Formation } from '../models/Formation.model';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.scss']
})
export class CreateFormationComponent implements OnInit {

  @Input() // Ce qui rentre
  formation: Formation;
  // Si autres parametres in, placer le décorateur
  // @Input()
  // var2: Type

  test: String = "I am the test !";

  @Output() // Ce qui sort
  formationChange: EventEmitter<Formation> = new EventEmitter<Formation>();

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.formation = {
        title: "Angulaaar"
      };
      this.test = "Hello ya :D";
    }, 3000);
  }
}
