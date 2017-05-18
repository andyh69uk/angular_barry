import { TestBed, inject } from '@angular/core/testing';

import { AsniService } from './asni.service';

describe('AsniService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchedulesService]
    });
  });

  it('should be created', inject([AsniService], (service: AsniService) => {
    expect(service).toBeTruthy();
  }));
});
