import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private helper:HttpClient) { }


Select()
{
  return this.helper.get("http://35.154.156.242:9898/emps");
}

SelectByNo(No)//come from edit.component.ts
{
  return this.helper.get("http://35.154.156.242:9898/emps/"+No);
}

Update(empobj)
{
  return this.helper.put("http://35.154.156.242:9898/emps/"+empobj.No, empobj);

}

Delete(No)//come from 
{
  return this.helper.delete("http://35.154.156.242:9898/emps/"+No);
}

Insert(empobj)
{
  return this.helper.post("http://35.154.156.242:9898/emps", empobj);

}
}
