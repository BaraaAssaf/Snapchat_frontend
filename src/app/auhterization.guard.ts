import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutherizationGuard implements CanActivate {
  constructor(private router:Router, private toaster:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token=localStorage.getItem('token');
   
    if(token)
    {

      if(state.url.indexOf('admin')>=0)
      {
        let user : any =localStorage.getItem('user');
        user=JSON.parse(user);
        if(user.role=='101')
        {
        return true;
        }
       else {
        this.toaster.warning('this page for admin');
        this.router.navigate(['']);
        return false;
       }
      }
      
      console.log(state);
      return true;
    }
    else {
      this.router.navigate(['']);
      this.toaster.warning('You are not Autherized');
      return false;
    }
  }
  
}
