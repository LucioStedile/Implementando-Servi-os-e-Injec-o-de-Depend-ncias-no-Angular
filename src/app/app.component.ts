import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  count = 0;
  nome = 'Lúcio Gentil Freitas Stedile';
  text = '';

  pessoas= [
    {
      firstName: '',
      lastName:'',
      age: 0
    }
  ];

  constructor(private PeopleService: PeopleService){

  }
  ngOnInit(): void {
    console.log(this.pessoas);
    this.getPeople();
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        
        this.count = 0;
      }
    }, 1000)
  }

  clicou(nome: string): void{
    console.log('Clicou em ', nome);
  }

  getPeople(){
    this.PeopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}
