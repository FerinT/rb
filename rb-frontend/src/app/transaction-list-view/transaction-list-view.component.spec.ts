import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListViewComponent } from './transaction-list-view.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TransactionService} from "../service/transaction/transaction-service";

describe('TransactionListViewComponent', () => {
  let component: TransactionListViewComponent;
  let fixture: ComponentFixture<TransactionListViewComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService]
    });
    await TestBed.configureTestingModule({
      declarations: [ TransactionListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
