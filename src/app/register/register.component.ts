import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: DataService,
            private router: Router) { }
  emp={"No":"","Name":"","Address":""};
  ngOnInit() {
  }
  insert()
  {
   let observable = this.service.insert(this.emp);
   observable.subscribe((result)=>{
     console.log(result);
     this.router.navigate(['/home']);
   })
  }
}
