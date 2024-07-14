import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  div1Visiable: boolean = true;
  isWarnigDivVisiable: boolean = false;
  num1: string = '';
  num2: string = '';
  selectedStatus: string = '';

  constructor(private deptService: DepartmentService) {
    this.deptService.onRoleChange$.subscribe((res:string)=>{
      debugger;
    })
    this.deptService.role$.subscribe((res:string)=>{
      debugger;
    })
  }

  showDiv1() { 
    this.div1Visiable = true;
  }
  hideDiv1() { 
    this.div1Visiable = false;
  }
  toggleDiv2() { 
    this.isWarnigDivVisiable = !this.isWarnigDivVisiable;
  }
}
