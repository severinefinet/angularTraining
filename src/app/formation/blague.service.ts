import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlagueService {
  // Subject --> Simulation de flux
  blagueSubject = new Subject();

  constructor() {
    interval(5000).pipe(
      map(v => {
        this.blagueSubject.next('Blague N°' + v + ' Hohoho ! :D');
      })
    ).subscribe();
  }

}
