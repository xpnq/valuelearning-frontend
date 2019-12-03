import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

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
