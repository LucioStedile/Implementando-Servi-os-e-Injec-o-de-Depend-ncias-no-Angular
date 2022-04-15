import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any>{
    let peopleArray= [
      {
        firstName: 'Lúcio',
        lastName:'Stedile',
        age: 52
      },
      {
        firstName: 'João',
        lastName:'Pereira',
        age: 33
      },
      {
        firstName: 'Maria',
        lastName:'Silva',
        age: 26
      },
      {
        firstName: 'MArcio',
        lastName:'Santos',
        age: 44
      }
    ]
    return of(peopleArray);
  }
}
