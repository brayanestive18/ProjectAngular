import { TestBed, inject } from '@angular/core/testing';

import { ModserverService } from './modserver.service';

describe('ModserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModserverService]
    });
  });

  it('should be created', inject([ModserverService], (service: ModserverService) => {
    expect(service).toBeTruthy();
  }));
});
