import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickedoutsideDirective } from './clickedoutside.directive';
import { PageComponent } from './page/page.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickedoutsideDirective,
    PageComponent,
    MainComponent,
    HeaderComponent,
    HeaderMenuComponent,
    FooterComponent,
    BannerComponent,
    UserEntryComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ContactUsComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  entryComponents: [UserEntryComponent, PrivacyPolicyComponent, TermsConditionsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
