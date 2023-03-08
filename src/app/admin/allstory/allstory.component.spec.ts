import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstoryComponent } from './allstory.component';

describe('AllstoryComponent', () => {
  let component: AllstoryComponent;
  let fixture: ComponentFixture<AllstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
