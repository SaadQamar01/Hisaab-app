import { TestBed, inject } from '@angular/core/testing';

import { PeopleCategoryService } from './peopleCategory.service';

describe('PeopleCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleCategoryService]
    });
  });

  it('should be created', inject([PeopleCategoryService], (service: PeopleCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
