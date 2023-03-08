import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertestmonialComponent } from './usertestmonial.component';

describe('UsertestmonialComponent', () => {
  let component: UsertestmonialComponent;
  let fixture: ComponentFixture<UsertestmonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertestmonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsertestmonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
