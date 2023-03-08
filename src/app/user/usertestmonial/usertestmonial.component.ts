import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usertestmonial',
  templateUrl: './usertestmonial.component.html',
  styleUrls: ['./usertestmonial.component.css']
})
export class UsertestmonialComponent implements OnInit {

  constructor(public home:HomeService,public user:UserService) { }
  token:any= localStorage.getItem('user');

  ngOnInit(): void {
    this.token=JSON.parse(this.token);
   
  }
  test:any={
  message:  '',
  userid:Number
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



}