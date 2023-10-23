import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { registeredHorsesResolver } from './registered-horses.resolver';

describe('registeredHorsesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => registeredHorsesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
