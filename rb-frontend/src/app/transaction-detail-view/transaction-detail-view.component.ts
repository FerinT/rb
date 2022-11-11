import {Component, OnInit} from '@angular/core';
import {Transaction} from "../service/transaction/transaction";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transaction-detail-view',
  templateUrl: './transaction-detail-view.component.html',
  styleUrls: ['./transaction-detail-view.component.scss']
})
export class TransactionDetailViewComponent implements OnInit {
  transaction: Transaction;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.transaction = history.state.data;
    if(this.transaction === undefined) {
      this.router.navigate(['']);
    }
  }

}
