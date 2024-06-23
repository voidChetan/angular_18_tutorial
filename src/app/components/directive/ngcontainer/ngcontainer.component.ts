import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.css'
})
export class NgcontainerComponent {
  isConatiner: boolean = true;

  http = inject(HttpClient);
  userList: any[]=[];
  isApi: boolean = false;

  getUser(){
    this.isApi = true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList = res;
      this.isApi = false;
    })
  }

}
