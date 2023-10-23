import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPistaComponent } from './form-pista.component';

describe('FormPistaComponent', () => {
  let component: FormPistaComponent;
  let fixture: ComponentFixture<FormPistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPistaComponent]
    });
    fixture = TestBed.createComponent(FormPistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
