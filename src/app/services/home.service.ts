import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  homeinfo:any=[];

  constructor(public http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { }

  gethomeinfo(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/homepage/getall").subscribe((r)=>{
    this.homeinfo=r;
    this.spinner.hide();
    
  },Error=>{
    this.spinner.hide();
  });
}


/* testimonial home */

testimonial:any=[];
gettestimonial(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/testimonial/getall").subscribe((r)=>{
    this.testimonial=r;
    this.spinner.hide();
    
  },Error=>{
    this.spinner.hide();
  
  });
}
user:any=[];
getuser(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/User").subscribe((r)=>{
    this.user=r;
    this.spinner.hide();
    
  },Error=>{
    this.spinner.hide();
  
  });
}

/* end testimonial */


contactus:any=[];
getallcontact(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/contactus").subscribe((r)=>{
    this.contactus=r;
    this.spinner.hide();
    
  },Error=>{
    this.spinner.hide();
  
  });
}

Createmsgcontact(body:any)
{
debugger
this.spinner.show();
this.http.post("https://localhost:44330/api/msgcontactus",body)
.subscribe((resp:any)=>{
  this.spinner.hide();
  
},Error=>{
  this.spinner.hide();


  alert("error");
});
}

}


