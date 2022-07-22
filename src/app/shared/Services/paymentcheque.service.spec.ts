import { TestBed } from '@angular/core/testing';

import { PaymentchequeService } from './paymentcheque.service';

describe('PaymentchequeService', () => {
  let service: PaymentchequeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentchequeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
