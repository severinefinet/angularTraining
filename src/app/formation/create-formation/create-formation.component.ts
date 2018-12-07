import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Formation } from '../models/Formation.model';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.scss']
})
export class CreateFormationComponent implements OnInit {

  @Input()
  set formation(f: Formation) {
    this.validateInput(f);
  }

  @Output() // Ce qui sort
  formationChange: EventEmitter<Formation> = new EventEmitter<Formation>();

  _formation: Formation;
  test: String = "I am the test !";

  constructor() { }

  ngOnInit() {
  }

  saveFormation() {
    console.log('child', this._formation)
    this.formationChange.emit(this._formation);
  }

  validateInput(f: Formation) {
    if (f) this._formation = f;
    else this._formation = {};
  }
}
