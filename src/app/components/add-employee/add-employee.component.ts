import { JsonPipe } from '@angular/common';
import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'

})
export class AddEmployeeComponent {
   
}
