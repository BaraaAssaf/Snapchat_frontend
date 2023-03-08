import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


   display_Image:any;

  constructor(private router:Router,private http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { }
  useractive:any=[];
   allusers:any=[];
   profile:any=[];
   login:any=[]

   //dashboard
  getalluseractive(){
    
    this.http.get("https://localhost:44330/api/Login/getalluseractive").subscribe((result)=>{
      this.useractive=result;
    
    
    },Error=>{
   
    
    });
  }

  getalluser(){
    
    this.http.get("https://localhost:44330/api/Login/getalluser").subscribe((r)=>{
      this.allusers=r;
    
    
    },Error=>{
      
    
    });
  }

 changeblock(body:any){
 
  console.log(body.loginid);
 var obj={
  
  ID:body.loginid,
  Isblock : body.isblock

}
console.log(obj);

  this.spinner.show();
  this.http.put("https://localhost:44330/api/Login/UpdateIsBlock",obj).subscribe((r)=>{

    this.spinner.hide();
    window.location.reload();

  },Error=>{
    this.spinner.hide();
  
  });
  
 }

 homeinfo:any=[];
 gethomeinfo(){

  this.http.get("https://localhost:44330/api/homepage/getall").subscribe((r)=>{
    this.homeinfo=r;
  
    
  },Error=>{
  
  
  });
 }
 display_image:any;
changehomeimage(file:FormData){
  this.http.post("https://localhost:44330/api/homepage/uploadhomeimage",file).subscribe((resp:any)=>{
    if(resp)
    {
     this.display_image=resp.imagepath;
    }
   },Error=>{
     alert("error");
   });
}

updatehomepage(body:any){
  if(this.display_image!=null)
  {
  body.imagepath=this.display_image;
  }
  this.spinner.show();
  this.http.put("https://localhost:44330/api/homepage/updatehomepage",body).subscribe((r)=>{
    
    this.toastr.success("Update Successful") ;
    this.spinner.hide();
   
   
  },Error=>{
    this.spinner.hide();
  
  });
}
reportinfo:any=[];
 getallreport(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/Report").subscribe((r)=>{
    this.reportinfo=r;
    this.spinner.hide();
    
   
  },Error=>{
    this.spinner.hide();
  
  });
}

updatereportstatus(body:any){
  this.spinner.show();
  this.http.put("https://localhost:44330/api/Report",body).subscribe((r)=>{
    
    this.toastr.success("Update Successful") ;
    this.spinner.hide();
   window.location.reload();
   
  },Error=>{
    this.spinner.hide();
  
  });
}
  //End Dashboard

  //Manage About
  About:any=[];
  getallAbout(){
    this.spinner.show();
    this.http.get("https://localhost:44330/api/AboutUs").subscribe((result)=>{
      this.About=result;
      this.spinner.hide();
    },Error=>{
      this.spinner.hide();
    
    });
  }

 

Update (body:any)
{
  this.spinner.show();

  if(this.display_Image != null)
  {
     body.imagePath=this.display_Image;
  }

  this.http.put('https://localhost:44330/api/AboutUs',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toastr.success('Updated |Successfully');
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message);
  })
  window.location.reload();
}

uploadAttachment(file:FormData)
{
  this.http.post('https://localhost:44330/api/AboutUs/uploadimage',file).subscribe
  ((resp:any)=>{
    if(resp)
    {     
      this.display_Image=resp.imagePath;//
    }
  },err=>{

  })
}
//End Manage About


//Manage Service
updateService(body:any)
{
  if(this.display_Image != null)
  {
     body.imagepath=this.display_Image;
  }
  this.http.put("https://localhost:44330/api/Service",body).subscribe((resp:any)=>{
    this.spinner.hide();
     this.toastr.success('Update | succes');
  },Error=>{
    this.spinner.hide();
    this.toastr.error('error');
    alert(Error);
  });
window.location.reload();
}


uploadimg(file:FormData)
{

  this.http.post("https://localhost:44330/api/User/uploaduserimage",file).subscribe((resp:any)=>{
   if(resp)
   {
    this.display_image=resp.imagepath;
   }
    // this.spinner.hide();
    // this.toastr.success('succes');
  },Error=>{
    // this.spinner.hide();
    // this.toastr.error('error');
    alert("error");
  });
}

uploadserviceimage(file:FormData)
{
  this.http.post('https://localhost:44330/api/Service/uploadimage',file).subscribe
  ((resp:any)=>{
    if(resp)
    {     
      this.display_Image=resp.imagepath;//
    }
  },err=>{
  })
}


deleteService(id:any){
  debugger
  this.spinner.show();
  this.http.delete("https://localhost:44330/api/Service/delete/"+id).subscribe((result)=>{
    this.spinner.hide();
    this.toastr.success("Delete|Successfully");
    window.location.reload();
  },Error=>{
    this.spinner.hide();
    this.toastr.error('error.message');
  });
}

numOfservice:any = [];
salesOfservice()
{
  this.spinner.show();
  this.http.get("https://localhost:44330/api/Order/countOfService").subscribe((result)=>{
    this.numOfservice=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });

}


service:any=[];
getallService(){
  debugger
  this.spinner.show();
  this.http.get("https://localhost:44330/api/Service").subscribe((result)=>{
    this.service=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}

Storytop10:any=[];
gettop10Story(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/Story/gettop10").subscribe((result)=>{
    this.Storytop10=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}


counttop10:any=[];
getcounttop10(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/Viewers/getcounttop10").subscribe((result)=>{
    this.counttop10=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}

changeblockstory(body:any)
{
  this.spinner.show();
  this.http.put("https://localhost:44330/api/Story",body).subscribe((resp:any)=>{
    this.spinner.hide();
     this.toastr.success('Update | succes');
  },Error=>{
    this.spinner.hide();
    this.toastr.error('error');
    alert(Error);
  });
   window.location.reload();
}
allStory:any=[];
getallStory(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/Story").subscribe((result)=>{
    this.allStory=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}

CreateService(body:any)
{   
  body.imagepath=this.display_Image;
this.spinner.show();
this.http.post("https://localhost:44330/api/Service",body)
.subscribe((resp:any)=>{
  this.spinner.hide();
  window.location.reload();
   this.toastr.success('Created|succes');
},Error=>{
  this.spinner.hide();
  this.toastr.error(Error.massege);
  alert("error");
});


}

//End ManageService

   // testimonial
   /* testimonial*/
testimonial:any=[];
getalltestimonialadmin(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/testimonial/getalltestimonialadmin").subscribe((r)=>{
    this.testimonial=r;
 
    this.spinner.hide();
   
   
  },Error=>{
    this.spinner.hide();
  
  });
}

updateTestimonialStatus(id:number,status:number){
  this.spinner.show();
 
  this.http.put(`https://localhost:44330/api/testimonial/updatestatus/${id}/${status}`,null).subscribe((r)=>{
    
    this.toastr.success("Update Successful") ;
    this.spinner.hide();
   window.location.reload();
   
  },Error=>{
    this.spinner.hide();
  
  });
}
/* end testimonial */


//profile
adminprofile(id:any)
{   
 debugger
 var obj={

   ID:id}

this.spinner.show();
console.log('id : '+id)
this.http.get(`https://localhost:44330/api/User/GetUserById/${id}`)
.subscribe((resp:any)=>{
  this.profile=resp;
  console.log(this.profile);
  this.spinner.hide();
 
   this.toastr.success('Get user|succes');
},Error=>{
  this.spinner.hide();
  this.toastr.error(Error.massege);
  alert("error");
});
}

updateprofile(body:any)
{
   debugger
  if(this.display_Image != null)
  {
     body.imagepath=this.display_Image;
  }

 this.http.put("https://localhost:44330/api/user",body).subscribe((resp:any)=>{
   this.spinner.hide();
    this.toastr.success('Update | succes');
 },Error=>{
   this.spinner.hide();
   this.toastr.error('error');
   alert(Error);
 });
window.location.reload();
}




submit1:any=false
submit(email:any , password:any)
{
   var body ={
     Username: (<string>email)  ,
     Password: (<string>password)
       }
   
   const headerDir=
   {
       'Contant-Type':'application/json',
       'Accept':'application/json'
   }
   const requestOptions={
     headers : new HttpHeaders(headerDir)
   }
   debugger
   this.spinner.show();
   this.http.post('https://localhost:44330/api/Login/AUTH',body,requestOptions).subscribe
   ((resp)=>{ 
     this.spinner.hide();
     this.toastr.success('success');
     this.submit1=true;
     const responce ={
       token:(<string>resp) 
  }
  
   },err=>{
     this.spinner.hide();
     this.router.navigate(['admin/profile']); 
     this.toastr.error('the password is not righte');
   })
}


resetpassword(body:any){
  this.spinner.show();
 
  this.http.put(`https://localhost:44330/api/Login/UpdateLogenPassword`,body).subscribe((r)=>{
    
    this.toastr.success("update pass | Successful") ;
    this.spinner.hide();
   window.location.reload();
   
  },Error=>{
    this.spinner.hide();
  
  });
}
//end profile



//manage contactus

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

Createmsgcontact(body:FormData)
{
debugger
this.spinner.show();
this.http.post("https://localhost:44330/api/msgcontactus",body)
.subscribe((resp:any)=>{
  this.spinner.hide();
   this.toastr.success('Created|succes');
},Error=>{
  this.spinner.hide();
  this.toastr.error(Error.massege);

  alert("error");
});
}

updateContactus(body:FormData)
{
debugger
  this.http.put("https://localhost:44330/api/contactus",body).subscribe((resp:any)=>{
    this.spinner.hide();
     this.toastr.success('Update | succes');
  },Error=>{
    this.spinner.hide();
    this.toastr.error('error');
    alert(Error);
  });
window.location.reload();
}

//manage msgcontactus
msgcontactus:any=[];
getallmsgcontact(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/msgcontactus").subscribe((r)=>{
    this.msgcontactus=r;
    this.spinner.hide();
    
  },Error=>{
    this.spinner.hide();
  
  });
}

deletemsgcontact(id:any){
  debugger
  this.spinner.show();
  this.http.delete("https://localhost:44330/api/msgcontactus/delete/"+id).subscribe((result)=>{
    this.spinner.hide();
    this.toastr.success("Delete|Successfully");
  },Error=>{
    this.spinner.hide();
    this.toastr.error('error.message');
  });
window.location.reload();
}
}











