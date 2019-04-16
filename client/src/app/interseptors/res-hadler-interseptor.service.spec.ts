import { TestBed, inject } from '@angular/core/testing';

import { ResHadlerInterseptorService } from './res-hadler-interseptor.service';

describe('ResHadlerInterseptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResHadlerInterseptorService]
    });
  });

  it('should be created', inject([ResHadlerInterseptorService], (service: ResHadlerInterseptorService) => {
    expect(service).toBeTruthy();
  }));
});
