import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  select()
  {
    return this.http.get("http://13.233.71.220:9898/emps");
  }
  selectByNO(No)
  {
    return this.http.get("http://13.233.71.220:9898/emps/"+No);
  }
  update(empobj)
  {
    return this.http.put("http://13.233.71.220:9898/emps/"+empobj.No,empobj);
  }
  delete(No)
  {
    return this.http.delete("http://13.233.71.220:9898/emps/"+No);
  }
  insert(empobj1)
  {
    return this.http.post("http://13.233.71.220:9898/emps",empobj1);
  }
}

