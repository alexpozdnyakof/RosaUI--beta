import { TestBed } from '@angular/core/testing';

import { IndexedService } from './indexed.service';

describe('IndexedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexedService = TestBed.get(IndexedService);
    expect(service).toBeTruthy();
  });
});
