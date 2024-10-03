import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExpenseComponent } from './user-expense.component';

describe('UserExpenseComponent', () => {
  let component: UserExpenseComponent;
  let fixture: ComponentFixture<UserExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
