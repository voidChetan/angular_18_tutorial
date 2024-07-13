import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal("Chetan");
  lastName = signal("Jogi");

  fullName = computed(()=> this.firstName() +" "+this.lastName())

  courseName: string = "JAva";

  rollNo = signal<number>(123);

  cityList =  signal(["Pune",'Mumbai']);
  studentObj = signal({
    name:'Chetan',
    city:'Pune'
  })


  constructor() {
    const fNae =  this.firstName();
    setTimeout(() => {
      // this.firstName.set("Dot Net");
      this.courseName = "HTML"
    }, 5000);
  }
  changeStudetnCity() {
    this.studentObj.set({...this.studentObj(),city:'Mumbai'})
  }
  addCity() {
    this.cityList.set([...this.cityList(),"Nagpur"])
  }

  changeName() {
    this.firstName.set("Sachin")
  }
  changeLastName() {
    this.lastName.set("Tendulkar")
  }


}
