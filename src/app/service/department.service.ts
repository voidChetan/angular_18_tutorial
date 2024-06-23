import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  apiURl: string = 'https://projectapi.gerasim.in/api/Complaint/';

  constructor(private http: HttpClient) { }

  getAllDept() {
    debugger;
   return this.http.get(this.apiURl +"GetParentDepartment");
  }

  saveNewDept(obj:any) {
    return this.http.post(`${this.apiURl}AddNewDepartment`, obj)
  }

  addTwoNo(num1: number, num2: number) {
    debugger; 
    return num1 +  num2;
  }
}
