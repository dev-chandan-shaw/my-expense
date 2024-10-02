import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IExpense } from '../../models/interface/IExpense';

@Component({
  selector: 'app-expense-card',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.css'
})
export class ExpenseCardComponent {

  @Input() expenseItem!:IExpense

}
