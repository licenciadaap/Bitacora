import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { catalogoBitacorasResolver } from './catalogo-bitacoras.resolver';

describe('catalogoBitacorasResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => catalogoBitacorasResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
