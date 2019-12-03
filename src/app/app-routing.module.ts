import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'auth/reset',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: HomeComponent
  },
  {
    path: 'elevenplus',
    loadChildren: "./elevenplus/elevenplus.module#ElevenplusModule"
  },
  {
    path: 'courses',
    loadChildren: "./courses/courses.module#CoursesModule"
  }, 
  {
    path: 'parents',
    loadChildren: "./parents/parents.module#ParentsModule"
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }