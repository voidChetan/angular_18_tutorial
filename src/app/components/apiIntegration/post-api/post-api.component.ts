import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../../resuableComponent/alert/alert.component';
import { MyButtonComponent } from '../../../resuableComponent/my-button/my-button.component';
import { Department, IDepartmentList } from '../../../model/class/Customer';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule,JsonPipe,AlertComponent,MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostAPIComponent implements OnInit {

  deptObj: Department = new Department();
  deptList: IDepartmentList[] = [];

  http = inject(HttpClient);

  constructor(private deptSrv: DepartmentService){
    const result = this.deptSrv.addTwoNo(23,56);
    debugger; 
  }

  ngOnInit(): void {
    this.getDepartment();
  }
  onEdit(data: any) {
    this.deptObj = new Department();
    this.deptObj = data;
  }
  getData(daata: any) {
    debugger;
  }
  onDelete(id: number) {
    debugger;
    const isDelete=  confirm("Are you sure want to delete");
    if(isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res:any)=>{
        debugger;
        if(res.result) {
          alert("Department Deleted Success");
          this.getDepartment();
        } else {
          alert(res.message)
        }
      })
    }
    
  }

  // onSave() {
  //   debugger;
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res:any)=>{
  //     debugger;
  //     if(res.result) {
  //       alert("Department Created Success");
  //       this.getDepartment();
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }

  onSave() {
    this.deptSrv.saveNewDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department Created Success");
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })
  }
  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("Department Updated Success");
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })
  }

  // getDepartment() {
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
  //     this.deptList = res.data;
  //   })
  // }

  getDepartment() {
    debugger;
    this.deptSrv.getAllDept().subscribe((res:any)=>{
      debugger;
      this.deptList = res.data;
    })
  }

}
