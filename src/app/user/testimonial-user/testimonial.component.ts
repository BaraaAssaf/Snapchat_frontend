import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { UserService } from '../../services/user.service';
import { UserModule } from '../user.module';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

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
