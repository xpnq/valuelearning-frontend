import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  showProgressBar: boolean;
  currentRoute: string;
  bannerHeight: string;
  constructor() { 
    this.bannerHeight = 'full';
  }

  ngOnInit() {
  }
  handleShowProgress(event){
    // console.log('in processShowProcess', event);
    this.showProgressBar = event;
  }

  setCurrentRoute(event){
    console.log('setCurrentRoute', event);
    this.currentRoute = event;
    console.log('this.currentRoute', this.currentRoute);
    if(this.currentRoute == '/'){
      this.bannerHeight = 'full'; 
    }
    else {
      this.bannerHeight = 'half';
    }
  }


}
