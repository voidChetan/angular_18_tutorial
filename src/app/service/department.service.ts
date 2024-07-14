import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/Constant';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MasterService } from './master/master.service';
import { Department } from '../model/class/Customer';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  public onRoleChange$ : Subject<string> = new Subject<string>;
  
  public role$ : BehaviorSubject<string> = new BehaviorSubject<string>("");
  
  constructor(private master: MasterService) { }

  getAllDept():Observable<Department[]> {
    debugger;
   return this.master.get<Department[]>(Constant.API_URL + Constant.DEPARTMENT_METHODS.GET_PARENT_DEPT);
  }

  saveNewDept(obj:any) {
    return this.master.post(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT}`, obj)
  }

  addTwoNo(num1: number, num2: number) {
    debugger; 
    return num1 +  num2;
  }
}
