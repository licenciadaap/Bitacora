import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { urlFormExistsResolver } from './url-form-exists.resolver';

describe('urlFormExistsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => urlFormExistsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
