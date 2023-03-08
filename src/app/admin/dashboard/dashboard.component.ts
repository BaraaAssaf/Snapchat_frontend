import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public admin:AdminService) { 
    
  }



  ngOnInit(): void {

    this.admin.getalluseractive();
    this.admin.getalluser();
  
    
  }
 
  updateblock : FormGroup=new FormGroup({

    loginid:new FormControl(''),
    isblock :new FormControl(''),

  });
  setvalue(lid:any,isb:any){

  
    
    this.setvalue2(this.updateblock,lid,isb);
  }
  setvalue2(body:any,lid:any,isb:any){
    body.loginid=lid;
   body.isblock=isb;
   if(isb==1)
   body.isblock=0;
   else if(isb==0)
   body.isblock=1;


   this.admin.changeblock(body);
  
   
  }

}
