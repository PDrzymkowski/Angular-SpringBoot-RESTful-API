import { TestBed } from '@angular/core/testing';

import { FamilyMemberServiceService } from './family-member-service.service';

describe('FamilyMemberServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamilyMemberServiceService = TestBed.get(FamilyMemberServiceService);
    expect(service).toBeTruthy();
  });
});
