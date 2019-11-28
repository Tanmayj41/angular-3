import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emps: any;
  constructor(private service: DataService) { }
  ngOnInit() 
  {
    var observable = this.service.select();
    observable.subscribe((result)=>{
      console.log(result);
      this.emps = result;
    })
  }

}
