import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public home:HomeService,private spinner:NgxSpinnerService,private toastr:ToastrService,dialog : MatDialog) { }

  ngOnInit(): void {
    this.home.getallcontact();
  }

  msgcontactForm : FormGroup=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    subject :new FormControl(),
    message:new FormControl(),
  });

 sendmsg(){
    console.log(this.msgcontactForm.value);
      debugger
    this.home.Createmsgcontact(this.msgcontactForm.value);
  }
  
}