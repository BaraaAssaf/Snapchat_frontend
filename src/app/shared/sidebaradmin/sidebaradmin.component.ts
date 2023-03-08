import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sidebaradmin',
  templateUrl: './sidebaradmin.component.html',
  styleUrls: ['./sidebaradmin.component.css']
})
export class SidebaradminComponent implements OnInit {
 
  constructor(private router:Router , public auth : AuthService , public user :UserService) { }
    token:any= localStorage.getItem('user')
   

  
     
    
  
  ngOnInit(): void {
   this.token=JSON.parse(this.token);
   this.user.getuserbyid(this.token.userid);
  }

  logout(){
   
    this.auth.updateIsActive(this.token.LoginId,0);
    localStorage.clear();
    this.router.navigate(['security/login']);
  }
}
