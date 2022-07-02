import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaSuscripcionComponent } from './alta-suscripcion.component';

describe('AltaSuscripcionComponent', () => {
  let component: AltaSuscripcionComponent;
  let fixture: ComponentFixture<AltaSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaSuscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
