import { TestBed, inject } from '@angular/core/testing';

import { CounselingService } from './counseling.service';

describe('CounselingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounselingService]
    });
  });

  it('should be created', inject([CounselingService], (service: CounselingService) => {
    expect(service).toBeTruthy();
  }));
});
