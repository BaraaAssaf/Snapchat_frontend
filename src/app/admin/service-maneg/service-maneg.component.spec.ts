import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceManegComponent } from './service-maneg.component';

describe('ServiceManegComponent', () => {
  let component: ServiceManegComponent;
  let fixture: ComponentFixture<ServiceManegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceManegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceManegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
