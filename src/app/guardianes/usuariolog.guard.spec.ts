import { TestBed } from '@angular/core/testing';

import { UsuariologGuard } from './usuariolog.guard';

describe('UsuariologGuard', () => {
  let guard: UsuariologGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuariologGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
