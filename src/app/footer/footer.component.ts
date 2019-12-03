import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  showPrivacyPolicy() {
      const dialogRef = this.dialog.open(PrivacyPolicyComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed');
      });
  }

  showTermsConditions(){
    const dialogRef = this.dialog.open(TermsConditionsComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      //// console.log('The dialog was closed');
    });
  }

}
