import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseInformationComponent } from './horse-information.component';

describe('HorseInformationComponent', () => {
  let component: HorseInformationComponent;
  let fixture: ComponentFixture<HorseInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorseInformationComponent]
    });
    fixture = TestBed.createComponent(HorseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
