import { Pipe, PipeTransform } from '@angular/core';
import { Formation } from '../models/Formation.model';

@Pipe({
  name: 'formationTitlePipe'
})
export class FormationTitlePipe implements PipeTransform {

  transform(formation: Formation, sperator: String = '-'): any {
    return `${formation.title} ${sperator} ${formation.startDate} ${sperator} ${formation.endDate}`;
  }
}
