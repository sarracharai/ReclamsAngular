import { TestBed } from '@angular/core/testing';

import { RegisteragentService } from './registeragent.service';

describe('RegisteragentService', () => {
  let service: RegisteragentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteragentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
