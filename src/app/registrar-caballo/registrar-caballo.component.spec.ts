import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCaballoComponent } from './registrar-caballo.component';

describe('RegistrarCaballoComponent', () => {
  let component: RegistrarCaballoComponent;
  let fixture: ComponentFixture<RegistrarCaballoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarCaballoComponent]
    });
    fixture = TestBed.createComponent(RegistrarCaballoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
