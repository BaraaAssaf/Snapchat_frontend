import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { OtheruserprofileComponent } from './otheruserprofile/otheruserprofile.component';
import { TestimonialComponent } from './testimonial-user/testimonial.component';
import { UsertestmonialComponent } from './usertestmonial/usertestmonial.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    HomeuserComponent,
    ChatComponent,
    ProfileComponent,
    OtheruserprofileComponent,
    TestimonialComponent,
    UsertestmonialComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    GoogleMapsModule,
  ]
})
export class UserModule { }
