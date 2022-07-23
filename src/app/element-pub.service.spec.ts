import { TestBed } from '@angular/core/testing';

import { ElementPubService } from './element-pub.service';

describe('ElementPubService', () => {
  let service: ElementPubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementPubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
