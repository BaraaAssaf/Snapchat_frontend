import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component';
import {  RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebaradminComponent,
    NavbaruserComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatDialogModule
    
    
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SidebaradminComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NavbaruserComponent,
    MatDialogModule
    
  ]
})
export class SharedModule { }
