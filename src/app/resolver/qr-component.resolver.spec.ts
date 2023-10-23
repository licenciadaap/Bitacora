import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { qrComponentResolver } from './qr-component.resolver';

describe('qrComponentResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => qrComponentResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
