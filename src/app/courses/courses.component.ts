import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

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
