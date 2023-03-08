import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count, timeout } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from '../../app.component'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  constructor(public user:UserService , public router : Router) { }

  token:any= localStorage.getItem('user');
  id:number=0;
  idto:Number=0;

  ext:any ;
icon:any=[];
userlat:any=undefined;
userlng:any=undefined;
  ngOnInit(): void {
   
    this.user.getallSponsor();
   this.token=JSON.parse(this.token);
   this.user.getuserbyid(this.token.userid);
   this.user.getfriend(this.token.userid);
   this.id=Number(this.token.userid);
   this.user.getallchat(this.id);
   this.user.getmessagenotseen(this.token.userid);
   this.user.getalluser();
   this.user.getalllogin();
   this.user.getallService();
   this.user.getallStory();
   this.user.getalllocation();
  

  
  
    
   
   this.icon={
    url: "data:image/jpeg;base64,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", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(10,10), // origin
    anchor: new google.maps.Point(10, 10) // anchor
};
   
  }

  display: any;
  center: google.maps.LatLngLiteral = {
    
    lat: 31.9862,
    lng: 35.944777
};
  
//   public position=[{
//     lat: 31.898846739198508,
//     lng: 35.915167644549996
//   },
//   {
//     lat: 31.986547, 
//     lng:35.945138
//   }
// ]
//   // label="abdallah awainat";
 
//   public label= {
//     color: 'white',
    
//     text: 'Marker label '
//   }
//   public tit={
//     text:'test',
//   }
  
  
  zoom = 8;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  
 
  //edit/
price:number=0;
serviceid:any=0;
SerialNumber:any;
SecurityCode:any;
ExpireDate:any;

title:any;
text:any;
path:any;
sponsoreddate:any;

  getpriceandIdforservice(p:number,sid:number){
    this.price=p;  
    this.serviceid=sid;
   
    }
    visa:any={}
    sponsor:any={}
    checkvisa()
    {
        this.visa={
           price:this.price,
           serviceid:this.serviceid,
           SerialNumber: this.SerialNumber,
           SecurityCode: this.SecurityCode,
           ExpireDate: this.ExpireDate , 
           userid: this.token.userid
        }
       
        this.sponsor=
        {
          title : this.title,
          text: this.text,
          path: this.path
        }
          
        this.user.CheckVisa(this.visa,this.sponsor);
    }
//edit/



changeext(path:any)
  {
      this.ext = path.split('.').pop();
      
      
  }




  chat(idc : Number)
  {
       this.user.getuserbyidchat(idc);
       //this.user.getmasseagetouser(this.token.userid ,idc);
       this.idto = idc;
       localStorage.setItem('chatid', idc.toString());
       this.router.navigate(['user/chat']);  
  }

  uploadImage(file:any)
  {
    debugger
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    //this.admin.uploadChatfile(formDate);
    this.user.uploadSonser(formDate);
  }
  
  story:any={}
  uploadImageStory(file:any)
  {
    this.story=
    {
      UserId :this.token.userid,
      Path : "",
      IsBlock : 0
    }
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    //this.admin.uploadChatfile(formDate);
    this.user.uploadStory(formDate , this.story);  
     //this.user.CreateStory(this.story);
  }
  
  changeshowstory(id:number){
    const img=document.getElementById(`${id}img`) as HTMLImageElement;
    const txt=document.getElementById(`${id}h3`) as HTMLHeadingElement;
    const div=document.getElementById(`${id}div`) as HTMLDivElement;
    const media=document.getElementById(`${id}media`) as HTMLDivElement;
    const progress=document.getElementById(`${id}progress`) as HTMLDivElement;
    const Video=document.getElementById(`video${id}`) as HTMLVideoElement|null;
   
    Video?.play();
    img.style.display="none";
    txt.style.display="none";
    div.style.display="none";
    progress.style.width="100%";
    var a=media.offsetTop;
    setTimeout(() => {
      img.style.display="block";
      txt.style.display="block";
      div.style.display="block";
      if(Video != null)
      {
      Video?.pause();
      Video.currentTime = 0;
      }
    }, 15000);
  }

  Viewerstory(id:any)
  {
     this.user.Viewerstory(id);
  }
  CreateViewer(storyid:any , storyuserid:any)
  {
    
      this.user.CreateViewer(storyid , storyuserid);
  }
  unfollow(fromid : any , toid :any)
  {
         this.user.Unfollow(fromid,toid);
  }

 



}

