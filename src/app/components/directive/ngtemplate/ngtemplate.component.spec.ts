import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateComponent } from './ngtemplate.component';

describe('NgtemplateComponent', () => {
  let component: NgtemplateComponent;
  let fixture: ComponentFixture<NgtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgtemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
