import { TestBed, inject } from '@angular/core/testing';

import { AsnisService } from './asnis.service';

describe('AsnisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsnisService]
    });
  });

  it('should be created', inject([AsnisService], (service: AsnisService) => {
    expect(service).toBeTruthy();
  }));
});
