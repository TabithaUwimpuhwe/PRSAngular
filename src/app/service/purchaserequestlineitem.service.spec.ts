import { TestBed, inject } from '@angular/core/testing';

import { PurchaseRequestLineItemService } from './purchaserequestlineitem.service';

describe('PurchaseRequestLineItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchaseRequestLineItemService]
    });
  });

  it('should be created', inject([PurchaseRequestLineItemService], (service: PurchaseRequestLineItemService) => {
    expect(service).toBeTruthy();
  }));
});
