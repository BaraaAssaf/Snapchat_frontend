import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(public admin:AdminService,public spinner:NgxSpinnerService,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.admin.getallreport();
    this.admin.getalluser();
  }

  updatereport:any={};
  updatereportstatus(id:number,status:number){
   this.updatereport={
    id:id,
    status:status
   };
   this.admin.updatereportstatus(this.updatereport);
  }
}
