import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-managehome',
  templateUrl: './managehome.component.html',
  styleUrls: ['./managehome.component.css']
})
export class ManagehomeComponent implements OnInit {

  constructor(public admin:AdminService,private spinner:NgxSpinnerService) { 
   
  }
  

  updatehomeform : FormGroup=new FormGroup({

    id:new FormControl(),
    text1 :new FormControl(),
   
    text2:new FormControl(),
    text3:new FormControl(),
    imagepath:new FormControl(),

  

  });
  
  ngOnInit(): void {
  
    this.admin.gethomeinfo();
   
  }
 
 
  p_data:any={};
  image:any;
  gethomeprevdata(idhome:any,text1home:any,text2home:any,text3home:any,imagepathhome:any){
   
   this.p_data={
     id:idhome,
    text1:text1home,
    text2:text2home,
    text3:text3home,
    imagepath:imagepathhome
   }
  //  this.updatehomeform.controls['id'].setValue(this.p_data.id);
  //  this.updatehomeform.controls['text1'].setValue(this.p_data.text1);
  //  this.updatehomeform.controls['text2'].setValue(this.p_data.text2);
  //  this.updatehomeform.controls['text3'].setValue(this.p_data.text3);
 
  }


  
 
  

  uploadhomeimage(file:any){
    if(file.length==0)
    return ;
    let fileToUpload=<File>file[0];
    const formDate=new FormData();
    formDate.append('file',fileToUpload,fileToUpload.name);
      this.admin.changehomeimage(formDate);

  }
  i:any;
  updatehomepage(){
    debugger
    this.i=this.p_data.imagepath;
     
    this.p_data.imagepath=this.i;

    this.admin.updatehomepage(this.p_data);
    
  }
}
