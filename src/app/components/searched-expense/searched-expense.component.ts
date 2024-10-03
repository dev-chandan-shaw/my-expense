import { Component, inject, Input } from '@angular/core';
import { IExpense } from '../../models/interface/IExpense';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../../service/expense.service';

@Component({
  selector: 'app-searched-expense',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './searched-expense.component.html',
  styleUrl: './searched-expense.component.css'
})
export class SearchedExpenseComponent {

  expense! : IExpense

  route = inject(ActivatedRoute)
  expenseService = inject(ExpenseService)

   ngOnInit(): void {
      this.getExpense();
    }
  
    getExpense() {
      this.route.params.subscribe((params) => {
        let expense_id = params['expense_id'];
        let user_id = params['user_id'];
        this.expenseService
          .getExpense(user_id, expense_id)
          .subscribe((res) => {
            this.expense = res;
            console.log(res);
            console.log(this.expense);
          });
      });
    }
   
}
