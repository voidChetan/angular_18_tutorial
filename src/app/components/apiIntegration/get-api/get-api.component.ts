import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../../resuableComponent/alert/alert.component';
@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {

  userList: any [] = [];
  customerList: any []= [];
  alertMsg : string = ''

  constructor(private http: HttpClient) {
    this.getAllUser();
  } 

  changeMSg() {
    this.alertMsg = 'THHJJHJ'
  }

  getAllUser() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      debugger;
      this.userList = result;
    })
  }

  getAllCustomer() {
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res:any)=>{
      debugger;
      this.customerList =  res.data;
    }, error=>{
      debugger;
    })
  }



}
