import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSuscripcionComponent } from './lista-suscripcion.component';

describe('ListaSuscripcionComponent', () => {
  let component: ListaSuscripcionComponent;
  let fixture: ComponentFixture<ListaSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSuscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
