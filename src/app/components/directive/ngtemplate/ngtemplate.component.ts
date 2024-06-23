import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {

  isUserLoggedIn: boolean = false;
  loggerUserName: string = "Chetan";

  @ViewChild('dyamicTem') dyanTemplate : TemplateRef<any> | undefined;
  @ViewChild('dyamicContainer', {read:ViewContainerRef}) dyanContanier : ViewContainerRef | undefined;

  loadTemplate() {
    if(this.dyanTemplate) {
      this.dyanContanier?.createEmbeddedView(this.dyanTemplate)
    }
  }
}
