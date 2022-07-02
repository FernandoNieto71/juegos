import { TestBed } from '@angular/core/testing';

import { GuardianPack1Guard } from './guardian-pack1.guard';

describe('GuardianPack1Guard', () => {
  let guard: GuardianPack1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianPack1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
