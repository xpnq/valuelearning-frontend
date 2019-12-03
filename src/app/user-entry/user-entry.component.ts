import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserEntryService } from './user-entry.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetails, UserAccess } from './user';
import { User } from './user';
import { DataService } from '../data.service';




@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.scss'],
  providers: [DataService]
})


export class UserEntryComponent {
  tabIndex: number = 0;
  @Output() showProgress = new EventEmitter();
  userDetails: UserDetails = {
    firstname: '',
    surname: '',
    middlename: '',
    email: '',
    password: ''
  };
  user: User =  new User();
  password1: string;
  password2: string;
  rememberMe: boolean = false;
  noHeaderTabIndex: number = 1;
  constructor(
    public dialogRef: MatDialogRef<UserEntryComponent >,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userEntryService: UserEntryService,
    private route: ActivatedRoute,
    private router: Router, 
    private dataService: DataService) {
      this.tabIndex = data.tabIndex;
      if (data.user){
        this.user = data.user;
      }
      if(typeof data.noHeaderTabIndex != 'undefined'){
        // console.log('data.noHeaderTabIndex', data.noHeaderTabIndex);
        this.noHeaderTabIndex = data.noHeaderTabIndex;
      }
    }

  close(): void {
    this.dialogRef.close();
  }

  login(){
    this.showProgress.emit(true);
    console.log('in login, changing profile access to', false);
    this.dataService.changeProfileAccess(false);
    this.userEntryService.
      checkLoginCredentials(this.user).subscribe(
        response => {
          this.showProgress.emit(false);
          if(this.rememberMe){
            localStorage.setItem('user', JSON.stringify(this.user.toBase64()))
          }
          this.userEntryService.getUserDetails(this.user.username).subscribe(response => {
            // console.log('response', response);
          });
          this.close();
          console.log('in login, changing profile access to', true);
          this.dataService.changeProfileAccess(true);
          location.reload();
        }
      );
  }

  register(){
    // console.log('in register', this.password1, this.password2);
    if(this.password1 === this.password2){
      // console.log('passwords are same');
      this.userDetails.password = this.password1
    }
    this.showProgress.emit(true);
    this.userEntryService.
      registerUser(this.userDetails).subscribe(
        response => {
          // console.log('response', response);
          if(response == 'User successfully created'){
            this.user.username = this.userDetails.email;
            this.user.password = '';
            this.tabIndex = 0;
            this.noHeaderTabIndex = 1;
          } else {

          }
          this.showProgress.emit(false);
          //this.router.navigate(['/profile']);
        }
      )
  }

  sendResetLink(){
    this.userEntryService.sendPasswordResetLink(this.user).subscribe(response => 
      {

      });
  }

  forgotPassword(){
    this.noHeaderTabIndex = 2;
  }

  backToLogin(){
    this.noHeaderTabIndex = 1;
  }
  
  resetPassword(){
    this.userEntryService.resetPassword('currentUserUserName', this.password1).subscribe(response => 
      {
        this.noHeaderTabIndex = 1;
      });
      
  }


}


