import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { ChatComponent } from './chat/chat.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { OtheruserprofileComponent } from './otheruserprofile/otheruserprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { UsertestmonialComponent } from './usertestmonial/usertestmonial.component';

const routes: Routes = [
  {
    path:'',
    component:HomeuserComponent
  },
  {
    path:'chat',
    component:ChatComponent
  }
  ,{
    path:'profile',
    component:ProfileComponent
  }
  ,{
    path:'otherprofile',
    component:OtheruserprofileComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
