import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { AutherizationGuard } from './auhterization.guard';
import { AuthModule } from './auth/auth.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'testimonial',
    component:TestimonialComponent
  },
  {
    path:'security',
    loadChildren : () => AuthModule
  },
  {
    path:'admin',
    loadChildren : () => AdminModule,
    canActivate:[AutherizationGuard]
  },
  {
    path:'user',
    loadChildren : () => UserModule,
    canActivate:[AutherizationGuard]
  },
  {
    path:'maps',
    component:MapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
