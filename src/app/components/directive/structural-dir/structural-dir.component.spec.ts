import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirComponent } from './structural-dir.component';

describe('StructuralDirComponent', () => {
  let component: StructuralDirComponent;
  let fixture: ComponentFixture<StructuralDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructuralDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
