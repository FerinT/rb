import {getTestBed, TestBed} from '@angular/core/testing';

import {TransactionService} from './transaction-service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TransactionGroup} from "./transaction-group";

describe('TransactionService', () => {
  let injector: TestBed;
  let service: TransactionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService]
    });
    injector = getTestBed();
    service = injector.get(TransactionService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should return an Observable<TransactionGroup>", () => {
    let grp: TransactionGroup = {
      days: [{
        id: '', transactions: []
      }]
    };

    service.getTransactions().subscribe(transactionGroup => {
      expect(transactionGroup.days.length).toBe(1);
      expect(transactionGroup).toEqual(grp);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/transactions');
    expect(req.request.method).toBe("GET");
    req.flush(grp);

  })
});
