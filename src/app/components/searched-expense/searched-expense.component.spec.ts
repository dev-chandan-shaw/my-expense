import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedExpenseComponent } from './searched-expense.component';

describe('SearchedExpenseComponent', () => {
  let component: SearchedExpenseComponent;
  let fixture: ComponentFixture<SearchedExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchedExpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
