import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-otheruserprofile',
  templateUrl: './otheruserprofile.component.html',
  styleUrls: ['./otheruserprofile.component.css']
})
export class OtheruserprofileComponent implements OnInit {

  constructor(public user:UserService , public router : Router) { }
  token:any= localStorage.getItem('user');
  idto:Number=0;
  case:Number=0;
  ngOnInit(): void {
    this.token=JSON.parse(this.token);
    this.user.otheruserprofile(localStorage.getItem("otheruser"))
    this.user.getMyfriend(this.token.userid);

  //    for(let i =0 ; i < this.user.Friend.length ; i++)
  //    {
  //     if(this.user.Friend[i].id == localStorage.getItem("otheruser") && this.user.Friend[i].status == 0)
  //    {
  //      this.case=1;
  //      break;
  //     }
  //    if(this.user.Friend[i].id == localStorage.getItem("otheruser") && this.user.Friend[i].status == 1) {
  //        this.case=2;
  //       break;
  //     }
  //     else{
  //       this.case=0;
  //     }
  // }

}

body:any={};
createfollow(fromid :any , toid : any)
{   debugger
   this.body={
   fromuser : fromid ,
   touser : toid ,
   status : 0
   }

  this.user.createFollow(this.body);
}

incrementcase(){
  this.case = 1;
}
unfollow(fromid : any , toid :any)
{
       this.user.Unfollow(fromid,toid);
}

  chat(idc : Number)
  {
       this.user.getuserbyidchat(idc);
       //this.user.getmasseagetouser(this.token.userid ,idc);
       this.idto = idc;
       localStorage.setItem('chatid', idc.toString());
       this.router.navigate(['user/chat']);  
  }
   ReportBody:any={
    message : "",
    reportfrom : 0 ,
    reportto  : 0,
    status : 0
   };
  CreateReport(id : any)
  {
     this.ReportBody.reportto =id;
     this.ReportBody.reportfrom = this.token.userid;
     
     this.user.CreateReport(this.ReportBody);


  }

}
