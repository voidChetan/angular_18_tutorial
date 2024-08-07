import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAPIComponent } from './post-api.component';

describe('PostAPIComponent', () => {
  let component: PostAPIComponent;
  let fixture: ComponentFixture<PostAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostAPIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //write test case for whole 
});
