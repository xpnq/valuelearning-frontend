import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PrivacyPolicyComponent>,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}


