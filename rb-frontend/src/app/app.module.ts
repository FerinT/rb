import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TransactionListViewComponent} from './transaction-list-view/transaction-list-view.component';
import {CurrencyPipe} from "./pipe/currency/currency-pipe";
import {TransactionService} from "./service/transaction/transaction-service";
import {HttpClientModule} from "@angular/common/http";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TransactionDetailViewComponent } from './transaction-detail-view/transaction-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyPipe,
    TransactionListViewComponent,
    TransactionDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
