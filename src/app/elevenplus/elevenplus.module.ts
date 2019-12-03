import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevenplusComponent } from './elevenplus.component';
import { ElevenPlusAdviceComponent } from './eleven-plus-advice/eleven-plus-advice.component';
import { ElevenPlusMockTestsComponent } from './eleven-plus-mock-tests/eleven-plus-mock-tests.component';
import { ElevenPlusMockTestsFaqComponent } from './eleven-plus-mock-tests-faq/eleven-plus-mock-tests-faq.component';
import { ElevenPlusSummerCourseComponent } from './eleven-plus-summer-course/eleven-plus-summer-course.component';
import { IndependentSchoolsComponent } from './independent-schools/independent-schools.component';
import { PreElevenPlusYearFourComponent } from './pre-eleven-plus-year-four/pre-eleven-plus-year-four.component';
import { ElevenPlusYearFiveComponent } from './eleven-plus-year-five/eleven-plus-year-five.component';
import { RouterModule, Routes } from "@angular/router"; 
import { MaterialModule } from '../material/material.module';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: "",
    component: ElevenplusComponent,
    children: [
      { path: "pre-elevenplus-year-four", component: PreElevenPlusYearFourComponent },
      { path: "elevenplus-year-five", component: ElevenPlusYearFiveComponent },
      { path: "independent-schools", component: IndependentSchoolsComponent },
      { path: "elevenplus-mock-tests", component: ElevenPlusMockTestsComponent },
      { path: "elevenplus-mock-test-faq", component: ElevenPlusMockTestsFaqComponent },
      { path: "elevenplus-summer-course", component: ElevenPlusSummerCourseComponent },
      { path: "elevenplus-advice", component: ElevenPlusAdviceComponent },
      { path: "main", component: DefaultComponent },
      { path: "", redirectTo: "main", component: DefaultComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ElevenplusComponent,
    PreElevenPlusYearFourComponent,
    ElevenPlusYearFiveComponent,
    IndependentSchoolsComponent,
    ElevenPlusMockTestsComponent,
    ElevenPlusMockTestsFaqComponent,
    ElevenPlusSummerCourseComponent,
    ElevenPlusAdviceComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ElevenplusModule { }
