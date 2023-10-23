import { TestBed } from '@angular/core/testing';

import { BitacoraCaballosService } from './bitacora-caballos.service';

describe('BitacoraCaballosService', () => {
  let service: BitacoraCaballosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitacoraCaballosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
