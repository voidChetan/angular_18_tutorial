import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleEventComponent } from './lifecycle-event.component';

describe('LifecycleEventComponent', () => {
  let component: LifecycleEventComponent;
  let fixture: ComponentFixture<LifecycleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifecycleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
