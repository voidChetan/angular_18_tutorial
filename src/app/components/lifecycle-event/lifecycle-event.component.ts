import { Component,OnChanges, OnInit,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent implements OnInit,OnChanges, DoCheck,AfterContentInit,AfterViewChecked,AfterViewInit,AfterContentChecked,OnDestroy {
  
  firstName: string;

  constructor() {
    console.log("constructor");
    this.firstName = "";
  }

 ngOnChanges(changes: SimpleChanges): void {
  console.log("ngOnChanges");
 }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit () {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngOnngAfterContentCheckedInit");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }



}
