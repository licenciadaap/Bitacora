import { TestBed } from '@angular/core/testing';

import { GetHorseInformationService } from './get-horse-information.service';

describe('GetHorseInformationService', () => {
  let service: GetHorseInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHorseInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
