import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-total-sales',
  templateUrl: './total-sales.component.html',
  styleUrls: ['./total-sales.component.css']
})
export class TotalSalesComponent implements OnInit {

  constructor( public admin:AdminService) { }

  ngOnInit(): void {
    this.admin.salesOfservice();
    this.admin.getallService();

  }

}
