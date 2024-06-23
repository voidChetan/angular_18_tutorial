import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAPIComponent } from './get-api.component';

describe('GetAPIComponent', () => {
  let component: GetAPIComponent;
  let fixture: ComponentFixture<GetAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
