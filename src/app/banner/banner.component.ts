import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() bannerHeight;
  imagePath: string = environment.imagePath;
  height = '26em';
  constructor() {
    this.bannerHeight = 'full';
   }

  ngOnInit() {
    
  }

  ngOnChanges(change: SimpleChanges) {
    if(change.bannerHeight.currentValue == 'full') {
      this.height = '26em';
    }
    else {
      this.height = '13em';
    }
  }

}
