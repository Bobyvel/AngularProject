import { TestBed, inject } from '@angular/core/testing';

import { JwtInterseptorService } from './jwt-interseptor.service';

describe('JwtInterseptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtInterseptorService]
    });
  });

  it('should be created', inject([JwtInterseptorService], (service: JwtInterseptorService) => {
    expect(service).toBeTruthy();
  }));
});
