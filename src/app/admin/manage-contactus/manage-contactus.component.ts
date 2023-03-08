import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-contactus',
  templateUrl: './manage-contactus.component.html',
  styleUrls: ['./manage-contactus.component.css']
})
export class ManageContactusComponent implements OnInit {
 

  constructor(public admin:AdminService,private spinner:NgxSpinnerService) { }

 

  ngOnInit(): void {
    this.admin.getallcontact();
  }
 
updatecontactusform : FormGroup=new FormGroup({

  id:new FormControl(),
  text1 :new FormControl(),
 
  text2:new FormControl(),
  text3:new FormControl()
});


p1_data:any={};
getcontactprevdata(cid:any,ctext1:any,ctext2:any,ctext3:any){
 
 this.p1_data={
  id:cid,
  text1:ctext1,
  text2:ctext2,
  text3:ctext3,
  
 }
 
}

updatecontactus(){
debugger
this.admin.updateContactus(this.p1_data);

}
}
