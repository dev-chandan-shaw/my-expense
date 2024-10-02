import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTransactionComponent } from './view-all-transaction.component';

describe('ViewAllTransactionComponent', () => {
  let component: ViewAllTransactionComponent;
  let fixture: ComponentFixture<ViewAllTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
