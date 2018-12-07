import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Formation } from '../models/Formation.model';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.scss']
})
export class CreateFormationComponent implements OnInit {

  @Input() // Ce qui rentre
  set formation(f: Formation) {
    this.validateInput(f);
  }

  @Output() // Ce qui sort
  formationChange: EventEmitter<Formation> = new EventEmitter<Formation>();

  _formation: Formation;
  test: String = "I am the test !";
  formationFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  private initFormationFormGroup(f: Formation) {
    this.formationFormGroup = this.fb.group({
      title: new FormControl(f.title ? f.title : '', Validators.required),
      description: new FormControl(f.description ? f.description : '', Validators.required),
      startDate: new FormControl(f.startDate ? f.startDate : '', Validators.required),
      endDate: new FormControl(f.endDate ? f.endDate : '', Validators.required)
    });
  }

  // Fonction executée au clock du bouton 'enregistrer'
  saveFormation() {
    // Emission de _formation (au compo parent)
    this.formationChange.emit(this.formationFormGroup.value);
  }

  validateInput(f: Formation) {
    if (f) {
      this._formation = f;
      this.initFormationFormGroup(this._formation);
    } else this._formation = {};

  }
}
