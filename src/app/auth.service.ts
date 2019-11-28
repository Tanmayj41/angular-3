import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate 
{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.isLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }
  isLoggedIn()
  {
    if(window.sessionStorage.getItem("isActive")!=null
     && window.sessionStorage.getItem("isActive")=="1")
     {
       return true;
     }
     else
     {
       return false;
     }
  }
  constructor(private router: Router) { }

  login(credentials)
  {
    if(credentials.uname=="abc" && credentials.password=="abc")
    {
      window.sessionStorage.setItem("isActive","1");
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
