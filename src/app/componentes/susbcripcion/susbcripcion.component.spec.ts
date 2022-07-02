import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusbcripcionComponent } from './susbcripcion.component';

describe('SusbcripcionComponent', () => {
  let component: SusbcripcionComponent;
  let fixture: ComponentFixture<SusbcripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SusbcripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SusbcripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
