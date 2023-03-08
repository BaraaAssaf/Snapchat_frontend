import { Component, OnInit } from '@angular/core';
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public user: UserService,private toastr:ToastrService,private auth:AuthService) { }
  token:any= localStorage.getItem('user');
  ngOnInit(): void {
    this.token=JSON.parse(this.token);
   this.user.userprofile(this.token.userid);

  }









 
  

  ll(){
  debugger
  console.log('this.user.profile.firstname')
  console.log(this.user.profile)
  console.log(this.user.login)}



p_data:any ={
  id:'',
  address: '',
  dateofbirth:'',
  email:this.user.profile.email,
  firstname: this.user.profile.firstname,
  imagepath:this.user.profile.imagepath,
  lastname:this.user.profile.lastname,
  phone: this.user.profile.phone
}

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
    this.user.updateprofile(this.p_data);
  }

  uploadImage(file:any)
  {
    debugger
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    this.user.uploadimg(formDate);
  }
  
  

    past: FormControl=new FormControl('',[Validators.required,Validators.minLength(8)]);
    
    newp:FormControl=new FormControl('',[Validators.required,Validators.minLength(8)]);

    repass:FormControl=new FormControl('',[Validators.required,Validators.minLength(8)]);

  pastpass(){
    this.user.submit(this.token.unique_name,this.past)
  }
  pastpass1(){ 
    console.log('newp : '+this.newp)
    console.log('repass : '+this.repass)
if(this.user.submit1){
  if(this.newp!=null){
    if(this.newp!=this.repass){
       this.toastr.error('the Value repassword is not valid');
    }else{
      if(this.newp)
      this.toastr.success('the same value');
     return true;
        }      
  }else{
    this.toastr.error('the Value repassword is null');

  }
}else{
  this.toastr.error('it is not the right pass.');

}
return false;
}

  
  resetpassword(){
if(this.pastpass1()){
 var body1:any={
  password :this.newp,
userid: this.p_data.id}
this.user.resetpassword(body1)
}


  }
}
