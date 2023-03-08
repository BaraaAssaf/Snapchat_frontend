import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-service-maneg',
  templateUrl: './service-maneg.component.html',
  styleUrls: ['./service-maneg.component.css']
})
export class ServiceManegComponent implements OnInit {
  
  constructor(public admin:AdminService,private spinner:NgxSpinnerService,private toastr:ToastrService , public router:Router) 
    { }

    createServiceForm:FormGroup=new FormGroup({
      servicename:new FormControl('',Validators.required),  
      imagepath :new FormControl(''),
      price :new FormControl('',Validators.required)
    })

  ngOnInit(): void {
    this.admin.getallService();
  }

  deleteid:any
 DeleteDialog(did:any){
     this.deleteid=did;
}

  DeleteSeve(id :any){
    this.admin.deleteService(id);
  }

  
  p_data:any={
  };
 update(id1:any, servicename1 : any ,price1:any,img:any){

      this.p_data={
        id:id1,
        servicename:servicename1,
        imagepath:img,
        price:price1
      }
      // this.updateServiceForm.controls['id'].setValue(this.p_data.id);
      // this.updateServiceForm.controls['imagepath'].setValue(this.p_data.imagepath); 
 }

 create()
 {
  this.router.navigate(['admin/createservice']);  
 }


     updateService(){
             this.admin.updateService(this.p_data)
     }
  
  uploadImage(file:any)
  {
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    this.admin.uploadserviceimage(formDate);
  }




}
