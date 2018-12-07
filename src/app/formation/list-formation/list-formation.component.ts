import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../models/Formation.model';
import { BlagueService } from '../blague.service';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.scss']
})
export class ListFormationComponent implements OnInit {

  @Input()
  formations: Formation[] = [];

  blague = '';

  constructor(private blagueService: BlagueService) { }

  ngOnInit() {
    this.blagueService.blagueSubject.next('blague marrante');
    // this.blagueService.blagueSubject.subscribe((b: string) => {
    //   this.blague = b;
    // })
  }

}
