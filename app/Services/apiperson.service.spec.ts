import { TestBed } from '@angular/core/testing';

import { ApipersonService } from './apiperson.service';

describe('ApipersonService', () => {
  let service: ApipersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
