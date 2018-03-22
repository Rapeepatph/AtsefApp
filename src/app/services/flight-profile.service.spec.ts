import { TestBed, inject } from '@angular/core/testing';

import { FlightProfileService } from './flight-profile.service';

describe('FlightProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightProfileService]
    });
  });

  it('should be created', inject([FlightProfileService], (service: FlightProfileService) => {
    expect(service).toBeTruthy();
  }));
});
