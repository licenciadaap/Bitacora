import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHidratacionComponent } from './form-hidratacion.component';

describe('FormHidratacionComponent', () => {
  let component: FormHidratacionComponent;
  let fixture: ComponentFixture<FormHidratacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormHidratacionComponent]
    });
    fixture = TestBed.createComponent(FormHidratacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
