import { TestBed } from '@angular/core/testing';

import { UserIdentifyService } from './user-identify.service';

describe('UserIdentifyService', () => {
  let service: UserIdentifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIdentifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
