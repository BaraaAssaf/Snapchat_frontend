import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
 

  constructor(public auth:AuthService,private spinner:NgxSpinnerService,public toastr:ToastrService) {
    
   }
   
  ngOnInit(): void {
  }

  email : FormControl=new FormControl('',[Validators.required]);
  password : FormControl=new FormControl('',[Validators.required,Validators.minLength(8)]);
  remember: FormControl=new FormControl('');

  Login(){
    console.log(this.email.value); 
    
    this.auth.submit(this.email.value,this.password.value);
    // alert(this.email.value);
    // alert(this.password.value);
  //    alert(this.remember.value);
  //   if(this.remember.value==true)
  //  { 
  //   localStorage.setItem('email',this.email.value);
  //   localStorage.setItem('password',this.password.value);
  // } 
  }

}
