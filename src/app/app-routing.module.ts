import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { HomeComponent } from './components/home/home.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { PricePageComponent } from './components/price-page/price-page.component';
 
   

const routes: Routes = [
  {path:'', component:HomeComponent , title:'Quran Class For Kids '},
  {path:'Course_Detail', component:CourseDetailComponent , title:'Course Details '},
  {path:'Price-Plan', component:PricePageComponent , title:'Price Plans '},


  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
