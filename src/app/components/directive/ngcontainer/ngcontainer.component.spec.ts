import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontainerComponent } from './ngcontainer.component';

describe('NgcontainerComponent', () => {
  let component: NgcontainerComponent;
  let fixture: ComponentFixture<NgcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgcontainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
