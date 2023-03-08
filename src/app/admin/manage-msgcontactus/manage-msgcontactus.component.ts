import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-manage-msgcontactus',
  templateUrl: './manage-msgcontactus.component.html',
  styleUrls: ['./manage-msgcontactus.component.css']
})
export class ManageMsgcontactusComponent implements OnInit {

  constructor(public admin:AdminService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
   this.admin.getallmsgcontact();
  }
deleteid:any
 DeleteDialog(cid:any){
     this.deleteid=cid;
}

  Deletemsgcontact(id :any){
    this.admin.deleteService(id);
  }
}
