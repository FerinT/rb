import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TransactionGroup} from "./transaction-group";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url = 'http://localhost:8080/api/transactions';

  constructor(private httpClient: HttpClient) {
  }

  getTransactions(): Observable<TransactionGroup> {
    return this.httpClient.get<TransactionGroup>(this.url);
  }
}
