import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {

  contentIndex: number = 0;
  constructor(private dataService: DataService) {
    
   }

  ngOnInit() {
    this.dataService.contentIndex.subscribe(response => {
      this.contentIndex = response
    });
  }

  showContent(index: number){
    this.contentIndex = index;
  }

}
