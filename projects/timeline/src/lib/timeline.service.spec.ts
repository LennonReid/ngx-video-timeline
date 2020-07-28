import { TestBed } from '@angular/core/testing';

import { NgxVideoTimelineService } from './timeline.service';

describe('TimelineService', () => {
  let service: NgxVideoTimelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxVideoTimelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
