import { TestBed } from '@angular/core/testing';

import { DeclartiveCategoryService } from './declartive-category.service';

describe('DeclartiveCategoryService', () => {
  let service: DeclartiveCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclartiveCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
