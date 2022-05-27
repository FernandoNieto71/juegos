import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptComponent } from './ppt.component';

describe('PptComponent', () => {
  let component: PptComponent;
  let fixture: ComponentFixture<PptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
