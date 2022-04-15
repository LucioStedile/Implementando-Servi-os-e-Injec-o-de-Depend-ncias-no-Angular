import { Component, OnInit } from '@angular/core';
import { ListService } from '../../shared/services/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.scss']
})
export class ListApiComponent implements OnInit {
  personagens: Array<any> = [];

  constructor(private ListService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.ListService.getList().subscribe(result => {
      this.personagens = result.results;
    })
  }

}
