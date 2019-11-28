import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor( private route:ActivatedRoute,//to get data from url
    private router:Router,//to navigate page to home
     private service:DataService) //to communicate with server
     { }

ngOnInit() 
{
this.route.paramMap.subscribe((result)=>{//to get value array from url
let No= result.get("No"); //get no from url
console.log(No);
let observableResult=this.service.Delete(No); // calling selectbtno record
observableResult.subscribe((records)=>{
console.log(records); //select single record from array
this.router.navigate(['home']);
});
});
}

}
