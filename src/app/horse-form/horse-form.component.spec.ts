import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseFormComponent } from './horse-form.component';

describe('HorseFormComponent', () => {
  let component: HorseFormComponent;
  let fixture: ComponentFixture<HorseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorseFormComponent]
    });
    fixture = TestBed.createComponent(HorseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
