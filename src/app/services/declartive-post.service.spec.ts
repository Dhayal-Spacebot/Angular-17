import { TestBed } from '@angular/core/testing';

import { DeclartivePostService } from './declartive-post.service';

describe('DeclartivePostService', () => {
  let service: DeclartivePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclartivePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
