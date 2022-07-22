import { TestBed } from '@angular/core/testing';

import { CarnetChequeService } from './carnet-cheque.service';

describe('CarnetChequeService', () => {
  let service: CarnetChequeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarnetChequeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
