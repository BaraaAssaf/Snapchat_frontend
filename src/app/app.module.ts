import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { provideRoutes } from '@angular/router';
import { TokenInterceptor } from 'src/Interceptor/token.interceptor';

import { GoogleMapsModule } from '@angular/google-maps';
import { MapsComponent } from './maps/maps.component';
import { MapInfoWindowComponent } from './map-info-window/map-info-window.component';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapHeatmapLayerComponent } from './map-heatmap-layer/map-heatmap-layer.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    TestimonialComponent,
    MapsComponent,
    MapInfoWindowComponent,
    MapMarkerComponent,
    MapHeatmapLayerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    GoogleMapsModule,
   
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
  
    
  ],
  
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
