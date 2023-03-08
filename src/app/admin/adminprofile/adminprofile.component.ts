import { Component, OnInit } from '@angular/core';
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})


export class AdminprofileComponent implements OnInit {
  constructor(public admin: AdminService,private toastr:ToastrService,private auth:AuthService, public user:UserService) { }
  token:any= localStorage.getItem('user');
  p_data:any ={};
  ngOnInit(): void {
    this.token=JSON.parse(this.token);
   this.admin.adminprofile(this.token.userid);
   this.user.getuserbyid(this.token.userid);
   this.p_data ={
    id:'',
    address:'',
    dateofbirth:'',
    email:this.admin.profile.email,
    firstname: this.admin.profile.firstname,
    imagepath:this.admin.profile.imagepath,
    lastname:this.admin.profile.lastname,
    phone: this.admin.profile.phone
  }
  }

  ll(){
  debugger
  console.log('this.admin.profile.firstname')
  console.log(this.admin.profile)
  console.log(this.admin.login)}





update(dateofbirth1:any,email1:any,firstname1:any, imagepath1:any
  ,lastname1:any
  ,phone1:any,address1:any,id1:any){

   this.p_data={
    id:id1,
    address:address1,
    dateofbirth:dateofbirth1,
    email:email1,
    firstname:firstname1,
    imagepath:imagepath1,
    lastname:lastname1,
    phone:phone1
  }
  
}

clearimg(){
  this.p_data.imagepath='';
  debugger
}

  updateProlile( ){
    this.admin.updateprofile(this.p_data);
  }

  uploadImage(file:any)
  {
    debugger
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    this.admin.uploadimg(formDate);
  }
  
  
  
    past: FormControl=new FormControl('',[Validators.required,Validators.minLength(8)]);
    newp:FormControl=new FormControl('',[Validators.required,Validators.minLength(8)]);

    repass:FormControl=new FormControl('',[Validators.required,Validators.minLength(8)]);
  pastpass(){
   
    this.admin.submit(this.token.unique_name ,this.past)
        
  }
  pastpass1(){ 
    console.log('newp : '+this.newp)
    console.log('repass : '+this.repass)
if(this.admin.submit1){
  if(this.newp!=null){
    if(this.newp!=this.repass){
       this.toastr.error('the Value repassword is not valid');
    }else{

      this.toastr.success('the same value');
     return true;
     
        }      
  }else{
    this.toastr.error('the Value repassword is null');

  }
}
return false;
}

  
  resetpassword(){
if(this.pastpass1()){
 var body1:any={
  password :this.newp,
userid: this.p_data.id}
this.admin.resetpassword(body1)
}


  }
}
