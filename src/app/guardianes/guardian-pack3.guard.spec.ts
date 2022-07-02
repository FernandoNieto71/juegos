import { TestBed } from '@angular/core/testing';

import { GuardianPack3Guard } from './guardian-pack3.guard';

describe('GuardianPack3Guard', () => {
  let guard: GuardianPack3Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianPack3Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
