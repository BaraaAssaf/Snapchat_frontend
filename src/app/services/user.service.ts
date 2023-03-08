import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  display_Image:any;
  constructor(private router:Router,private http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { }




  chat:any=[];
  getallchat(userid:number){
    this.spinner.show();
  this.http.get(`https://localhost:44330/api/message/getallchat/${userid}`).subscribe((r)=>{
    this.chat=r;
    this.spinner.hide();
    
  },Error=>{
    this.spinner.hide();
  });
  }


  messagenotseen:any=[];
  getmessagenotseen(userid:number){
    this.spinner.show();
  this.http.get(`https://localhost:44330/api/message/getmessagenotseen/${userid}`).subscribe((r)=>{
    this.messagenotseen=r;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
  });
  }


  alluser:any=[];
getalluser(){
  debugger
  this.spinner.show();
  this.http.get("https://localhost:44330/api/User").subscribe((r)=>{
    this.alluser=r;
    this.spinner.hide();
    
  },Error=>{
    this.spinner.hide();
  
  });
}

 otheruser:any;
otheruserprofile(id:any)
{
  debugger
  this.spinner.show();
  this.http.get(`https://localhost:44330/api/User/GetUserById/${id}`).subscribe((result)=>{
    this.otheruser=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}

allloginusers:any=[];
getalllogin(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/Login/getalluser").subscribe((r)=>{
    this.allloginusers=r;
    this.spinner.hide();
  
  },Error=>{
    this.spinner.hide();
  
  });
}


CreateReport(body:any)
{
   this.spinner.show();
   this.http.post("https://localhost:44330/api/Report",body)
  .subscribe((resp:any)=>{
     this.spinner.hide();
     window.location.reload();
     this.toastr.success('Created|succes');
     },Error=>{
    this.spinner.hide();
    this.toastr.error(Error.massege);
});
}


User:any;
getuserbyid(id:any){
  debugger
  this.spinner.show();
  this.http.get(`https://localhost:44330/api/User/GetUserById/${id}`).subscribe((result)=>{
    this.User=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}

chattouser:any =[];
getmasseagetouser(fromuser:any ,touser:any)
{
  this.spinner.show();
  this.http.get(`https://localhost:44330/api/message/getmessage/${fromuser}/${touser}`).subscribe((result)=>{
    this.chattouser=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });

}

messageSave(id:any , issave:any)
{
   
   if(issave == 0) issave=1;
      else 
        issave=0;
  this.http.put(`https://localhost:44330/api/message/updatesave/${id}/${issave}`,null).subscribe((resp:any)=>{
                 window.location.reload();   
  },Error=>{
  });
}


uploadChatfile(file:FormData)
{
  this.http.post('https://localhost:44330/api/message/sendattachment',file).subscribe
  ((resp:any)=>{
    if(resp)
    {     
      this.display_Image=resp.path;//
    }
  },err=>{
  })
}

/* edit delete message*/

deletemessagebyid(id:number){
  this.http.delete(`https://localhost:44330/api/message/deletemessagebyid/${id}`).subscribe((result)=>{
 
    window.location.reload();
  },Error=>{
   
  });
}

/* end */

Sendmessage(body : any)
{
     body.path=this.display_Image;
     
      this.http.post("https://localhost:44330/api/message",body)
      .subscribe((resp:any)=>{
    
       window.location.reload();
       this.toastr.success('Created|succes');
         },Error=>{

});
}



Userchat:any =[
  {}
];
getuserbyidchat(id:any){
  this.spinner.show();
  this.http.get(`https://localhost:44330/api/User/GetUserById/${id}`).subscribe((result)=>{
    this.Userchat=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}

Friend:any=[];
getMyfriend(id:any){
  debugger
  this.spinner.show();
  this.http.get(`https://localhost:44330/api/follow/getmyfriends/${id}`).subscribe((result)=>{
    this.Friend=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}


updatestatus(formuser : any , touser:any , status:any)
{
  this.spinner.show();
  this.http.put(`https://localhost:44330/api/follow/updatestatus/${formuser}/${touser}/${status}`,null).subscribe((resp:any)=>{
    this.spinner.hide();
     this.toastr.success('Update | succes');
  },Error=>{
    this.spinner.hide();
    this.toastr.error('error');
    alert(Error);
  });
 window.location.reload();
}

notefication:any=[];
getnoteficationFollow(id:any){
  debugger
  this.spinner.show();
  this.http.get(`https://localhost:44330/api/follow/getnoteficationFollow/${id}`).subscribe((result)=>{
    this.notefication=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}

Friend1:any=[];
getfriend(id:any){
  debugger
  this.spinner.show();
  this.http.get(`https://localhost:44330/api/follow/getfriendFollow/${id}`).subscribe((result)=>{
    this.Friend1=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}

createFollow(body : any)
{  debugger
      this.spinner.show();
      this.http.post("https://localhost:44330/api/follow/createfollow",body)
      .subscribe((resp:any)=>{
       this.spinner.hide();
       window.location.reload();

       this.toastr.success('Created|succes');
         },Error=>{
  this.spinner.hide();
  this.toastr.error(Error.massege);
});
}

Unfollow(fromid : any , toid :any){
  
  this.spinner.show();
  this.http.delete(`https://localhost:44330/api/follow/unfollow/${fromid}/${toid}`).subscribe((result)=>{
    this.spinner.hide();
    this.toastr.success("Delete|Successfully");
    window.location.reload();
  },Error=>{
    this.spinner.hide();
    this.toastr.error('error.message');
  });
}



//profile
profile:any=[];
login:any=[]

userprofile(id:any)
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
{ debugger

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
    this.router.navigate(['user/profile']); 
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


uploadimg(file:FormData)
{

 this.http.post("https://localhost:44330/api/User/uploaduserimage",file).subscribe((resp:any)=>{
  if(resp)
  {
   this.display_Image=resp.imagepath;
  }
   // this.spinner.hide();
   // this.toastr.success('succes');
 },Error=>{
   // this.spinner.hide();
   // this.toastr.error('error');
   alert("error");
 });
}
//end profile





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


sponor:any=[];
getallSponsor(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/sponsored").subscribe((result)=>{
    this.sponor=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}

CheckVisa(visa:any , sponsor:any)
{
  //[Route("checkvisa/{price}/{SerialNumber}/{SecurityCode}/{ExpireDate}/{userid}/{serviceid}")]
  this.spinner.show();
  this.http.get(`https://localhost:44330/api/Visa/checkvisa/${visa.price}/${visa.SerialNumber}/${visa.SecurityCode}/${visa.ExpireDate}/${visa.userid}/${visa.serviceid}`).subscribe((result)=>{
   
    if(result == true)
  {
    sponsor.path=this.display_Image;
    this.spinner.show();
    this.http.post("https://localhost:44330/api/sponsored",sponsor)
    .subscribe((resp:any)=>{
      this.spinner.hide();
      window.location.reload();
       this.toastr.success('Created|succes');
    },Error=>{
      this.spinner.hide();
      this.toastr.error(Error.massege);
    });
  }
  else
  {
    this.toastr.error("Try Again")
  }
  
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error("erorr");
  });
}

uploadSonser(file:FormData)
{
  this.http.post('https://localhost:44330/api/sponsored/uploadsponsor',file).subscribe
  ((resp:any)=>{                                       
    if(resp)
    {     
      this.display_Image=resp.path;//
    }

  },err=>{
  })
}


uploadStory(file:FormData , body:any)
{
  this.http.post('https://localhost:44330/api/Story/uploadStory',file).subscribe
  ((resp:any)=>{
    if(resp)
    {     
      this.display_Image=resp.path;//
      body.Path=this.display_Image;
      this.spinner.show();
       this.http.post("https://localhost:44330/api/Story",body)
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

  },err=>{
  })
}

countviewer:any;
bodyviewer:any={}
viewerbystory:any=[];
//[Route("getallViewers/{id}")]
Viewerstory(id:any)
{
  this.bodyviewer=
    {
      vstoryid : id
    }
    debugger
    this.viewerbystory = null;
   this.spinner.show();
  this.http.post("https://localhost:44330/api/Viewers/CountViewers",this.bodyviewer)
  .subscribe((resp:any)=>{
    debugger
      this.countviewer = resp[0].count;
      this.http.get(`https://localhost:44330/api/Viewers/getallViewers/${id}`)
      .subscribe((r:any)=>{
          this.viewerbystory = r;

          this.spinner.hide();
     },Error=>{
       this.spinner.hide();
       this.toastr.error(Error.massege);
       alert("error");
     });

 },Error=>{
   this.spinner.hide();
   this.toastr.error(Error.massege);
   alert("error");
 });
}

Story:any=[];
getallStory(){
  this.spinner.show();
  this.http.get("https://localhost:44330/api/Story/get24hour").subscribe((result)=>{
    this.Story=result;
    this.spinner.hide();
  },Error=>{
    this.spinner.hide();
    this.toastr.error(Error);
  });
}

Viewer:any;
CreateViewer(storyid:any , storyuserid:any)
{
   this.Viewer=
   {
    "storyId": storyid,
    "viewersId": storyuserid
   }
   this.http.post("https://localhost:44330/api/Viewers",this.Viewer)
 .subscribe((resp:any)=>{
},Error=>{
});
}



cresteTestimonial(body:any)
{
  this.http.post("https://localhost:44330/api/testimonial",body)
  .subscribe((resp:any)=>{
 },Error=>{
 });

}
location:any=[];
getalllocation(){
  this.http.get("https://localhost:44330/api/location").subscribe((result)=>{
    this.location=result;
  },Error=>{
   
  });
}

deletelocation(id:number){
  this.http.delete(`https://localhost:44330/api/location/deletelocation/${id}`).subscribe((result)=>{
   
  },Error=>{
   
  });
}


}
