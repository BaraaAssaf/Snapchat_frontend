import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ProfileComponent } from '../user/profile/profile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AllstoryComponent } from './allstory/allstory.component';
import { ChartComponent } from './chart/chart.component';
import { CreateserviceComponent } from './createservice/createservice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { ManageContactusComponent } from './manage-contactus/manage-contactus.component';
import { ManageMsgcontactusComponent } from './manage-msgcontactus/manage-msgcontactus.component';
import { ManagehomeComponent } from './managehome/managehome.component';
import { ReportComponent } from './report/report.component';
import { ServiceManegComponent } from './service-maneg/service-maneg.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { Top10storyComponent } from './top10story/top10story.component';
import { TotalSalesComponent } from './total-sales/total-sales.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'About',
    component:ManageAboutComponent
  } ,
  {
    path:'managehome',
    component:ManagehomeComponent
  }
  ,
  {
    path:'report',
    component:ReportComponent
  }
  ,{
    path:'service',
    component:ServiceManegComponent
  }
  ,{
    path:'Testimonial',
    component:TestimonialComponent
  }
  ,{
    path:'createservice',
    component:CreateserviceComponent
  }
  ,{
    path:'profile',
    component:AdminprofileComponent
  }
  ,{
    path:'chart',
    component:ChartComponent
  }
  ,{
    path:'top10',
    component:Top10storyComponent
  }
  ,{
    path:'allstory',
    component:AllstoryComponent
  }
  ,{
    path:'totalsales',
    component:TotalSalesComponent
  }
  ,{
    path:'managecontact',
    component:ManageContactusComponent
  }
  ,{
    path:'managemsgcontact',
    component:ManageMsgcontactusComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
