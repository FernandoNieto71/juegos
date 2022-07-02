import { TestBed } from '@angular/core/testing';

import { GuardianPack2Guard } from './guardian-pack2.guard';

describe('GuardianPack2Guard', () => {
  let guard: GuardianPack2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianPack2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
