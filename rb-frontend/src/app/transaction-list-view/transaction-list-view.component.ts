import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../service/transaction/transaction-service";
import {TransactionGroup} from "../service/transaction/transaction-group";

@Component({
  selector: 'app-transaction-list-view',
  templateUrl: './transaction-list-view.component.html',
  styleUrls: ['./transaction-list-view.component.scss']
})
export class TransactionListViewComponent implements OnInit {

  transactionGroup: TransactionGroup = {} as TransactionGroup;

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((val) => {
      this.transactionGroup = val;
      this.chronologicallyOrderDates();
    })
  }

  private chronologicallyOrderDates(): void {
    // order the transactions via date
    this.transactionGroup.days.forEach(val => {
      val.transactions.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    })
  }

}
