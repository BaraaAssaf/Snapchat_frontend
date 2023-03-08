import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService,private spinner:NgxSpinnerService,private toastr:ToastrService) { 


  }

  ngOnInit(): void {
   
  }
  registerForm : FormGroup=new FormGroup({

    firstname:new FormControl('',Validators.required),
    lastname :new FormControl('',Validators.required),
   
    address:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.minLength(10),Validators.required]),
    imagepath:new FormControl('',Validators.required),

    dateofbirth:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.minLength(8),Validators.email]),
    
    Username:new FormControl('',[Validators.required]),
    Password:new FormControl('',[Validators.required,Validators.minLength(8)]),

  });


  uploadimage(file:any){
    if(file.length==0)
    return ;
    let fileToUpload=<File>file[0];
    const formDate=new FormData();
    formDate.append('file',fileToUpload,fileToUpload.name);
      this.auth.uploadimg(formDate);
  }


  register(){
    console.log(this.registerForm.value);
      debugger
    this.auth.registerapi(this.registerForm.value);
  }
  
}
