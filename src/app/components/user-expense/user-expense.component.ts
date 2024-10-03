import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IExpense } from '../../models/interface/IExpense';
import { ExpenseService } from '../../service/expense.service';
import { Expense } from '../../models/class/Expense';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-expense',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './user-expense.component.html',
  styleUrl: './user-expense.component.css',
})
export class UserExpenseComponent {
  // expense! : IExpense 
  // route = inject(ActivatedRoute);
  // expenseService = inject(ExpenseService);

  @Input() isExpenseModelOpen! : boolean
  @Output() isExpenseModelOpenChange = new EventEmitter<boolean>();

  @Input() expense! : IExpense

  

    // ngOnInit(): void {
    //   this.getExpense();
    // }

    // getExpense() {
    //   this.route.params.subscribe((params) => {
    //     let expense_id = params['expense_id'];
    //     let user_id = params['user_id'];
    //     this.expenseService
    //       .getExpense(user_id, expense_id)
    //       .subscribe((res) => {
    //         this.expense = res;
    //         console.log(res);
    //         console.log(this.expense);
            
    //       });
    //   });
    // }

  closeExpenseItemModel() {
    this.isExpenseModelOpen = false;
    this.isExpenseModelOpenChange.emit(this.isExpenseModelOpen);
  }
}
