import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../models/Formation.model';

@Component({
  selector: 'app-mes-formations',
  templateUrl: './mes-formations.component.html',
  styleUrls: ['./mes-formations.component.scss']
})
export class MesFormationsComponent implements OnInit {

  @Input()
  formations: Formation[] = [];

  constructor() { }

  ngOnInit() {
  }

}
