import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MasterService } from './master/master.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private master: MasterService) { }

  getUsers() {
    return this.master.get('https://jsonplaceholder.typicode.com/users');
  }
}
