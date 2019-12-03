import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GcseMathsTuitionComponent } from './gcse-maths-tuition/gcse-maths-tuition.component';
import { Ks2StasCourseComponent } from './ks2-stas-course/ks2-stas-course.component';
import { Ks3MathYears7to9Component } from './ks3-math-years7to9/ks3-math-years7to9.component';
import { MathEnglishBoosterComponent } from './math-english-booster/math-english-booster.component';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from "@angular/router"; 
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: "",
    component: CoursesComponent,
    children: [
      { path: "gcse-math-tuition", component: GcseMathsTuitionComponent },
      { path: "ks2-sats-course", component: Ks2StasCourseComponent },
      { path: "ks3-math", component: Ks3MathYears7to9Component },
      { path: "maths-english-booster", component: MathEnglishBoosterComponent },
      { path: "", redirectTo: "maths-english-booster" }
    ]
  }
];

@NgModule({
  declarations: [
    CoursesComponent,
    GcseMathsTuitionComponent,
    Ks2StasCourseComponent,
    Ks3MathYears7to9Component,
    MathEnglishBoosterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoursesModule { }
