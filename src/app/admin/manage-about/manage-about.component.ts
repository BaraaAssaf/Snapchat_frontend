import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-about',
  templateUrl: './manage-about.component.html',
  styleUrls: ['./manage-about.component.css']
})
export class ManageAboutComponent implements OnInit {

  constructor(public admin:AdminService , public dialog : MatDialog) { }
 
  //@ViewChild('callupdateDailog') callupdateDailog! :TemplateRef<any>;

  // UpdateForm : FormGroup=new FormGroup({

  //   id:new FormControl(),
  //   text :new FormControl(),
  //   imagePath :new FormControl(),
  //  name:new FormControl(),
  // });


  ngOnInit(): void {
    this.admin.getallAbout();
  }

  uploadImage(file:any)
  {
    if(file.length==0)
    return ; 
    let fileToUpload=<File>file[0];//
    const formDate=new FormData();//object 
    formDate.append('file',fileToUpload,fileToUpload.name);
    debugger
    this.admin.uploadAttachment(formDate);
  }

  p_data:any={};
  openDialog(id:any , image:any ,text1 :any , name :any)
  {
    this.p_data={
      id:id,
      imagePath:image,
      text:text1,
      name:name
    }
    
   // this.UpdateForm.controls['id'].setValue(this.p_data.id); 
   // this.UpdateForm.controls['imagePath'].setValue(this.p_data.imagePath); 
   // this.dialog.open(this.callupdateDailog)
  }

  update(){
   
    this.admin.Update(this.p_data);
  }
       
      
  }

