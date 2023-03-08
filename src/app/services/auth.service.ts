import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  display_image:any;
  lat:number=0;
  lng:number=0;
  userlocation:any;
  getAddress:any;
  constructor(private http:HttpClient,public toastr:ToastrService,private spinner:NgxSpinnerService, private router:Router) { 
    
   }
  

   updateIsActive(id : any , isActrive : any){
    var body=
    {
      ID: id,
      Isactive: isActrive
    }

    this.spinner.show();
    this.http.put("https://localhost:44330/api/Login/UpdateIsActev",body).subscribe((r)=>{
      this.spinner.hide();
    },Error=>{
      this.spinner.hide();
    });
  }

  
  vaidate : any;
   submit(email:any , password:any)
   {
      var body ={
        Username: (<string>email)  ,
        Password: (<string>password)
          }
      
      const headerDir=
      {
          'Contant-Type':'application/json',
          'Accept':'application/json'
      }
      const requestOptions={
        headers : new HttpHeaders(headerDir)
      }
      
      this.spinner.show();
      debugger
      this.http.post('https://localhost:44330/api/Login/AUTH',body,requestOptions).subscribe
      ((resp)=>{ 
        debugger
        this.spinner.hide();
        this.toastr.success('success');
        const responce ={
          token:(<string>resp) 
     }
     
        localStorage.setItem('token',responce.token);

        let data:any =jwt_decode(responce.token);
        localStorage.setItem('user',JSON.stringify({...data}))
        if(data == null)
        {
          this.router.navigate(['security/register']); 
        }
        if(data.role == "101" )
        {
          this.updateIsActive(data.LoginId , 1);
          this.router.navigate(['admin/dashboard']);         
        }
        else if(data.role == "100" && data.isBlock==0)
        {
          navigator.geolocation.getCurrentPosition((position) => {  
            if (position) {  
                this.lat = position.coords.latitude;  
                this.lng = position.coords.longitude;  
                this.userlocation={
                  'userid':data.userid,
                  'lat':this.lat,
                  'lng':this.lng
                }
                this.http.post("https://localhost:44330/api/location",this.userlocation).subscribe((result)=>{
    
    },Error=>{
     
    });
               
              }

          this.updateIsActive(data.LoginId , 1);
          this.router.navigate(['user']);
          })
        }
        else
        {
          alert("This User Is Block");
          localStorage.clear();
        }
        
      },err=>{
        this.spinner.hide();
        this.vaidate = 1;
        // this.router.navigate(['']); 
        this.toastr.error(err.message);
      })
   }


  registerapi(body:any){
    debugger
    body.imagepath=this.display_image;
    this.spinner.show();

    this.http.post("https://localhost:44330/api/User",body).subscribe((result)=>{
      this.spinner.hide();
      this.toastr.success("success");
    
    },Error=>{
      this.spinner.hide();
      this.toastr.error('error');
    });
  }


  uploadimg(file:FormData)
  {
 
    this.http.post("https://localhost:44330/api/User/uploaduserimage",file).subscribe((resp:any)=>{
     if(resp)
     {
      this.display_image=resp.imagepath;
     }
      // this.spinner.hide();
      // this.toastr.success('succes');
    },Error=>{
      // this.spinner.hide();
      // this.toastr.error('error');
      alert("error");
    });
  }
}
