import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRegistradaComponent } from './info-registrada.component';

describe('InfoRegistradaComponent', () => {
  let component: InfoRegistradaComponent;
  let fixture: ComponentFixture<InfoRegistradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoRegistradaComponent]
    });
    fixture = TestBed.createComponent(InfoRegistradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
