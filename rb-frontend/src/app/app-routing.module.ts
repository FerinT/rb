import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionListViewComponent} from './transaction-list-view/transaction-list-view.component';
import {TransactionDetailViewComponent} from "./transaction-detail-view/transaction-detail-view.component";

const routes: Routes = [
  {path: "", component: TransactionListViewComponent},
  {path: "home", component: TransactionListViewComponent},
  {path: "detail-view", component: TransactionDetailViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
