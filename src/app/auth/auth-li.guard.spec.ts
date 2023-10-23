import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authLIGuard } from './auth-li.guard';

describe('authLIGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authLIGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
