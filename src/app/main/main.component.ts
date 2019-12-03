import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Output() showProgress = new EventEmitter();
  @Output() currentRoute = new EventEmitter();
  constructor(private data: DataService, private router: Router) { 
    this.data.currentProgress.subscribe(progress => this.showProgress.emit(progress));
    console.log('this.router', this.router.url);
  }

  ngOnInit() {

  }

  onActivate(event){
    this.data.changeCurrentRoute(this.router.url);
    this.currentRoute.emit(this.router.url);
  }

}
