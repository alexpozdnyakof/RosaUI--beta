import { TestBed } from '@angular/core/testing';

import { TranslitService } from './translit.service';

describe('TranslitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslitService = TestBed.get(TranslitService);
    expect(service).toBeTruthy();
  });
});
