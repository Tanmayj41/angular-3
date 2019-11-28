import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={uname:"",password:""};
  constructor(private service: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  signin()
  {
    if(this.service.login(this.credentials))
    {
      this.router.navigate(['/home']);
    }
    else
    {
      this.router.navigate(['/login']);
    }
  }
}
