import { TestBed, inject } from '@angular/core/testing';

import { GroupProfileService } from './group-profile.service';

describe('GroupProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupProfileService]
    });
  });

  it('should be created', inject([GroupProfileService], (service: GroupProfileService) => {
    expect(service).toBeTruthy();
  }));
});
