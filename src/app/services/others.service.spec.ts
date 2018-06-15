import { TestBed, inject } from '@angular/core/testing';

import { OthersService } from './others.service';

describe('OthersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OthersService]
    });
  });

  it('should be created', inject([OthersService], (service: OthersService) => {
    expect(service).toBeTruthy();
  }));
});
