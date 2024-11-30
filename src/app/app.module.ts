import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 import { FormsModule } from '@angular/forms';
  
   import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
 
 
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
 
import { BannerComponent } from './components/banner/banner.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ArabicSectionComponent } from './components/arabic-section/arabic-section.component';
import { LearnHereComponent } from './components/learn-here/learn-here.component';
import { RegisterSecComponent } from './components/register-sec/register-sec.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { FirstCourseComponent } from './components/first-course/first-course.component';
import { PricePlanComponent } from './components/price-plan/price-plan.component';
import { VideoReviewComponent } from './components/video-review/video-review.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { PricePageComponent } from './components/price-page/price-page.component';
// import { HttpLoaderFactory } from './app-translate-loader'; // adjust the path as needed

const firebaseConfig = {
  apiKey: "AIzaSyBmAQYIbA3tr2VCsMC_5hveW5-DYM3kRdU",
  authDomain: "demo1-22a88.firebaseapp.com",
  projectId: "demo1-22a88",
  storageBucket: "demo1-22a88.appspot.com",
  messagingSenderId: "934277004790",
  appId: "1:934277004790:web:0d48544bbb76a533afdbd7",
  measurementId: "G-H8VNHR8MBP"
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
   
     BannerComponent,
     CoursesComponent,
     ArabicSectionComponent,
     LearnHereComponent,
     RegisterSecComponent,
     ChooseUsComponent,
     FirstCourseComponent,
     PricePlanComponent,
     VideoReviewComponent,
     ReviewsComponent,
     CourseDetailComponent,
     PricePageComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
     FormsModule,
    CommonModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
   ],
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
