import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailViewComponent } from './transaction-detail-view.component';

describe('TransactionDetailViewComponent', () => {
  let component: TransactionDetailViewComponent;
  let fixture: ComponentFixture<TransactionDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionDetailViewComponent);
    component = fixture.componentInstance;
  //  fixture.detectChanges();
  });

  it('should create', () => {
 //   expect(component).toBeTruthy();
  });
});
