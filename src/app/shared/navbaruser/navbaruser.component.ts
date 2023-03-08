import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {

  constructor(private router:Router , public auth : AuthService , public user:UserService ) { }

  token:any= localStorage.getItem('user');
   

  ngOnInit(): void {
   this.token=JSON.parse(this.token);
   this.user.userprofile(this.token.userid);
   this.user.getalllogin();
   this.user.getnoteficationFollow(this.token.userid);
   this.user.getmessagenotseen(this.token.userid);
  }



    test:any={
    message:  '',
    userid: 0
    }
    
    createtestimonial(){
      debugger
      this.test.userid=this.token.userid
      // if(this.test.massege!=null){
        this.user.cresteTestimonial(this.test)
   // }
      console.log(this.test.message+1)
      console.log(this.token.userid)
    }

  reject(fromuser:any , touser:any)
  {
     this.user.updatestatus(fromuser , touser , 0);
  }

  Accept(fromuser:any , touser:any)
  {
    this.user.updatestatus(fromuser , touser , 1);
  }

  
   idprofile : any =0;
  getuserbyid()
  {
    
    var o1 = document.getElementById("input-datalist") as HTMLInputElement;
    
    for(let i =0 ; this.user.allloginusers.length ; i++)
    {
      if(o1.value == this.user.allloginusers[i].username){
        debugger
        
          this.idprofile = this.user.allloginusers[i].userid;
          break;
      }
    }

    

    localStorage.setItem("otheruser" , this.idprofile);
    this.router.navigate(['user/otherprofile']);
  }

  logout(){
    this.user.deletelocation(this.token.userid);
    this.auth.updateIsActive(this.token.LoginId , 0);
    localStorage.clear();
    this.router.navigate(['security/login']);
  }
  
}
