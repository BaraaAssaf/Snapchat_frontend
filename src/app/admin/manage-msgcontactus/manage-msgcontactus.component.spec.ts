import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMsgcontactusComponent } from './manage-msgcontactus.component';

describe('ManageMsgcontactusComponent', () => {
  let component: ManageMsgcontactusComponent;
  let fixture: ComponentFixture<ManageMsgcontactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMsgcontactusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMsgcontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
