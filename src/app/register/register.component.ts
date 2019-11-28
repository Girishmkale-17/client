import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emp= {
    "No":"",
    "Name":"",
    "Age":"" 
  };
constructor( private route:ActivatedRoute,//to get data from url
          private router:Router,//to navigate page to home
           private service:DataService) //to communicate with server
           { }

  ngOnInit() {
  }

  Insert()
  {
    console.log(this.emp);
    let observableResult=this.service.Insert(this.emp);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['home']);//after insert move to home page
    });
  }


}
