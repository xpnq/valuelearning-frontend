import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UserEntryComponent } from '../user-entry/user-entry.component';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() contentIndex = new EventEmitter();
  constructor(public dialog: MatDialog, private data: DataService, private router: Router) {
    // console.log(this.router.url);
    if(this.router.url == '/auth/reset'){
      this.openDialog();
    }
    else if (this.router.url == '/profile'){
      this.data.changeProfileAccess(true);
    }
  }

  ngOnInit() {
  }

  openDialog(): void {
    
    const dialogRef = this.dialog.open(UserEntryComponent,
      {panelClass: 'home-component-dialog', data: { tabIndex: 0, noHeaderTabIndex: 0 }});

    const sub = dialogRef.componentInstance.showProgress.subscribe((event) => {
      this.data.changeProgress(event);
    });
    dialogRef.afterClosed().subscribe(result => {
      sub.unsubscribe();
      // console.log('The dialog was closed');
    });
  }

  setContentIndex(index: number){
    this.data.changeContentIndex(index);
  }

}
