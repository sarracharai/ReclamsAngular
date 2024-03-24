import { TestBed } from '@angular/core/testing';

import { LoginagentService } from './loginagent.service';

describe('LoginagentService', () => {
  let service: LoginagentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginagentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
