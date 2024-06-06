import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveComponent } from './reactive.component';

describe('ReactiveComponent', () => {
  let component: ReactiveComponent;
  let fixture: ComponentFixture<ReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
