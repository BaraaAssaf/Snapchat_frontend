import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { ManagehomeComponent } from './managehome/managehome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { ServiceManegComponent } from './service-maneg/service-maneg.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CreateserviceComponent } from './createservice/createservice.component';

import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ChartComponent } from './chart/chart.component';
import { AllstoryComponent } from './allstory/allstory.component';
import { Top10storyComponent } from './top10story/top10story.component';
import { TotalSalesComponent } from './total-sales/total-sales.component';
import { ManageContactusComponent } from './manage-contactus/manage-contactus.component';
import { ManageMsgcontactusComponent } from './manage-msgcontactus/manage-msgcontactus.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManageAboutComponent,
    ManagehomeComponent,
    ReportComponent,
    ServiceManegComponent,
    TestimonialComponent,
    CreateserviceComponent,
    AdminprofileComponent,
    ChartComponent,
    AllstoryComponent,
    Top10storyComponent,
    TotalSalesComponent,
    ManageContactusComponent,
    ManageMsgcontactusComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
