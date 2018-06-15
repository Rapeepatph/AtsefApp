import { TestBed, inject } from '@angular/core/testing';

import { TerminalEfficiencyService } from './terminal-efficiency.service';

describe('TerminalEfficiencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TerminalEfficiencyService]
    });
  });

  it('should be created', inject([TerminalEfficiencyService], (service: TerminalEfficiencyService) => {
    expect(service).toBeTruthy();
  }));
});
