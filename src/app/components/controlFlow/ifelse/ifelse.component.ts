import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
