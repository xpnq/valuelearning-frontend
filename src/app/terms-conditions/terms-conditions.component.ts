import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TermsConditionsComponent>,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}