import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHerrajeComponent } from './form-herraje.component';

describe('FormHerrajeComponent', () => {
  let component: FormHerrajeComponent;
  let fixture: ComponentFixture<FormHerrajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormHerrajeComponent]
    });
    fixture = TestBed.createComponent(FormHerrajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
