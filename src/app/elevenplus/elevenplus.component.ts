import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-elevenplus',
  templateUrl: './elevenplus.component.html',
  styleUrls: ['./elevenplus.component.scss']
})
export class ElevenplusComponent implements OnInit {

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
