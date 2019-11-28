import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp={"No":"","Name":"","Address":""};
  constructor(private route: ActivatedRoute,
              private service: DataService,
              private router: Router) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
      let No = result.get("No");
      let observable = this.service.selectByNO(No);
      observable.subscribe((resultU)=>{
        console.log(resultU);
        this.emp = resultU[0];
      })
    })
  }

  update()
  {
   let observableR = this.service.update(this.emp);
   observableR.subscribe((resultUP)=>{
     console.log(resultUP);
     this.router.navigate(['/home']);
   })
  }
}
