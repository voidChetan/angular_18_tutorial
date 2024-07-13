import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constant } from '../../../constant/Constant';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  studentObj: any = {
    firstName: '',
    lastName: '',
    userName:'',
    city: '',
    state: '',
    zipCode:'',
    isAcceptTerms: false
  }

  validationMessage: any =  Constant.VALIDATION_MESSAGE;
  formValue: any;

  onSubmit() {
    debugger;
    this.formValue  = this.studentObj;
  }
  resetForm() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName:'',
      city: '',
      state: '',
      zipCode:'',
      isAcceptTerms: false
    }
  }
}
