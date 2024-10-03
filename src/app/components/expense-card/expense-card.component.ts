import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IExpense } from '../../models/interface/IExpense';
import { RouterLink } from '@angular/router';
import { UserExpenseComponent } from "../user-expense/user-expense.component";

@Component({
  selector: 'app-expense-card',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterLink, UserExpenseComponent],
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.css'
})
export class ExpenseCardComponent {

  @Input() expenseItem!:IExpense

  isExpenseItemModelVisible : boolean = false;

  openExpenseItemModel () {
    this.isExpenseItemModelVisible = true;
  }
}
