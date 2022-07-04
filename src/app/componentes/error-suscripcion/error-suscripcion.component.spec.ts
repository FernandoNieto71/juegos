import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSuscripcionComponent } from './error-suscripcion.component';

describe('ErrorSuscripcionComponent', () => {
  let component: ErrorSuscripcionComponent;
  let fixture: ComponentFixture<ErrorSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorSuscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
