import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserEntryComponent } from '../user-entry/user-entry.component';
import { MatDialog } from '@angular/material';
import { User, UserDetails, UserAccess } from '../user-entry/user';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isProfileAccessed: boolean = false;
  userLoggedIn: boolean = false;
  userDetails: UserDetails;
  userAccess: UserAccess;
  currentTab: string = '';
  @Output() showProgress = new EventEmitter();
  constructor(public dialog: MatDialog, 
              private dataService: DataService) {
      // console.log('in hedder constructor');
  }
  
  ngOnInit(){
    this.dataService.profileAccess.subscribe(response => {
      console.log('in header ngOnInit profile acccess', response);
      this.isProfileAccessed = response;
      if(this.isProfileAccessed || true){
        let userDetails = localStorage.getItem('userDetails');
        let userAccess = localStorage.getItem('userAccess');
        if(userAccess){
          this.userDetails = JSON.parse(userDetails);
          this.userAccess = JSON.parse(userAccess);
          // console.log(this.userAccess);
          if(this.userAccess.jwtString){
            this.userLoggedIn = true;
          }
        }
      }
    });


  }

  openDialog(tabIndex: number): void {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user){
      user = User.fromBase64(user);
    } else {
      user = new User();
    }
    
    const dialogRef = this.dialog.open(UserEntryComponent,
      {panelClass: 'header-component-dialog', data: { tabIndex: tabIndex, user: user }});

    const sub = dialogRef.componentInstance.showProgress.subscribe((event) => {
      // console.log('event', event);
      this.showProgress.emit(event);
    });
    dialogRef.afterClosed().subscribe(result => {
      sub.unsubscribe();
      // console.log('The dialog was closed');
    });
  }

  logout(){
    console.log('in logout chaning profile access to', false);
    this.dataService.changeProfileAccess(false);
    localStorage.removeItem('userAccess');
    location.reload();
  }

}
