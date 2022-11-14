import {getTestBed, TestBed} from '@angular/core/testing';

import {TransactionService} from './transaction-service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TransactionGroup} from "./transaction-group";
import {Observable} from "rxjs";

describe('TransactionService', () => {
  let injector: TestBed;
  let service: TransactionService;
  let httpMock: HttpTestingController;
  let spy: any;

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

  describe('#getTransactions', () => {
    it('should return an Observable<User[]>', () => {
      spy = spyOn(service, 'getTransactions').and.returnValue(new Observable<TransactionGroup>());
      let transactions = service.getTransactions().subscribe(TransactionService => {
        console.log(TransactionService);
      });

      expect(transactions).toBeTruthy();
    });
  });

});
