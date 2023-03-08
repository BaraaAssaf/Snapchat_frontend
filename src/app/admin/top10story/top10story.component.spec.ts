import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10storyComponent } from './top10story.component';

describe('Top10storyComponent', () => {
  let component: Top10storyComponent;
  let fixture: ComponentFixture<Top10storyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10storyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top10storyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
