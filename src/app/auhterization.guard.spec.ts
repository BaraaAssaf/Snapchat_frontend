import { TestBed } from '@angular/core/testing';

import { AutherizationGuard } from './auhterization.guard';

describe('AuhterizationGuard', () => {
  let guard: AutherizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutherizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
