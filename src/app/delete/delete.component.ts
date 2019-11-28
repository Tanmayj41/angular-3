import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: DataService,
              private router: Router) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
     let No = result.get("No");
     let observable = this.service.delete(No);
     observable.subscribe((result)=>{
       console.log(result);
       this.router.navigate(['/home']);
     })
    })
  }

}
