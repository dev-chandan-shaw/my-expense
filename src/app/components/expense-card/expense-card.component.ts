import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.css'
})
export class ExpenseCardComponent {

  @Input() expenseItem = {
    category : '',
    amount : '',
  }

}
