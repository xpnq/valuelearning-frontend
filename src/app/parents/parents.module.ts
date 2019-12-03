import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToEnrollComponent } from './how-to-enroll/how-to-enroll.component';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TermDatesComponent } from './term-dates/term-dates.component';
import { RouterModule, Routes } from "@angular/router"; 
import { MaterialModule } from '../material/material.module';
import { ParentsComponent } from './parents.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  {
    path: "",
    component: ParentsComponent,
    children: [
      { path: "how-to-enrol", component: HowToEnrollComponent },
      { path: "enrolment-form", component: EnrollmentFormComponent },
      { path: "testimonials", component: TestimonialsComponent },
      { path: "term-dates", component: TermDatesComponent },
      { path: "main", component: DefaultComponent },
      { path: "", redirectTo: "main" }
    ]
  }
];

@NgModule({
  declarations: [
    HowToEnrollComponent, 
    EnrollmentFormComponent, 
    TestimonialsComponent, 
    TermDatesComponent,
    ParentsComponent, 
    DefaultComponent],
    imports: [
      CommonModule,
      MaterialModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ParentsModule { }
