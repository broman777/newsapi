import { TestBed } from '@angular/core/testing';

import { NewsParserService } from './news-parser.service';

describe('NewsParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsParserService = TestBed.get(NewsParserService);
    expect(service).toBeTruthy();
  });
});
