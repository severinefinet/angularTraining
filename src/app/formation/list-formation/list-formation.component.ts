import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../models/Formation.model';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.scss']
})
export class ListFormationComponent implements OnInit {

  @Input()
  formations: Formation[] = [];

  constructor() { }

  ngOnInit() {
  }

}
