import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-createservice',
  templateUrl: './createservice.component.html',
  styleUrls: ['./createservice.component.css']
})
export class CreateserviceComponent implements OnInit {
 
  constructor(public admin:AdminService,private spinner:NgxSpinnerService,private toastr:ToastrService , public router:Router) { }

  ngOnInit(): void {
  }

    
  uploadmage(file:any)
  {
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    this.admin.uploadserviceimage(formDate);
  }


    p_datac:any={
    servicename:'',
    imagepath:'',
    price:0
    };
  create(){  
    this.admin.CreateService(this.p_datac);
    this.router.navigate(['admin/service']);  

  } 


}
