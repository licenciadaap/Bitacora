import { TestBed } from '@angular/core/testing';

import { AddHorseService } from './add-horse.service';

describe('AddHorseService', () => {
  let service: AddHorseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddHorseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
