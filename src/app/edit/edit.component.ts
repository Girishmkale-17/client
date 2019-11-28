import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp= {
          "No":"",
          "Name":"",
          "Age":""
        };
  constructor( private route:ActivatedRoute,//to get data from url
                private router:Router,//to navigate page to home
                 private service:DataService) //to communicate with server
                 { }

  ngOnInit() 
  {
      this.route.paramMap.subscribe((result)=>{
       let No= result.get("No"); //get no from url
        console.log(No);
        let observableResult=this.service.SelectByNo(No); // calling selectbtno record
        observableResult.subscribe((records)=>{
          console.log(records[0]); //select single record from array
        this.emp= records[0];
        }); 
      });
  }

  Update()
  {
    console.log(this.emp);
    let observableResult=this.service.Update(this.emp);
    observableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['home']);//after update move to home page
    });
  }

}
