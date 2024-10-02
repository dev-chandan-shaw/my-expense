import { Component, inject, OnInit } from '@angular/core';
import { IExpense } from '../../models/interface/IExpense';
import { ExpenseService } from '../../service/expense.service';
import { CommonModule, DatePipe } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-recent-transaction',
  standalone: true,
  imports: [CommonModule, DatePipe, MatProgressSpinnerModule],
  templateUrl: './recent-transaction.component.html',
  styleUrl: './recent-transaction.component.css'
})
export class RecentTransactionComponent implements OnInit{

    recentExpenseList : IExpense[] = []
    isLoading: boolean = true;

    expenseService = inject(ExpenseService);

    ngOnInit(): void {
        this.getRecentExpense();
    }

    getRecentExpense() {
      this.expenseService.getLimitedExpense(10).subscribe((res : IExpense[]) => {
        this.isLoading = true;
        this.recentExpenseList = res;
        this.isLoading = false;
      })
    }
}
