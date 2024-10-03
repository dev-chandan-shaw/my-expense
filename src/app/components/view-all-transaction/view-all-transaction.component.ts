import { Component, inject, OnInit } from '@angular/core';
import { IExpense } from '../../models/interface/IExpense';
import { ExpenseService } from '../../service/expense.service';
import { ExpenseCardComponent } from "../expense-card/expense-card.component";
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchBarComponent } from "../search-bar/search-bar.component";


@Component({
  selector: 'app-view-all-transaction',
  standalone: true,
  imports: [ExpenseCardComponent, CommonModule, MatProgressSpinnerModule, SearchBarComponent],
  templateUrl: './view-all-transaction.component.html',
  styleUrl: './view-all-transaction.component.css'
})
export class ViewAllTransactionComponent implements OnInit{
  expenseList : IExpense[] = []
  isLoading : boolean = true;

  expenseService = inject(ExpenseService)

  getAllExpense() {
    this.expenseService.getAllExpense().subscribe((res : IExpense[]) => {
      this.isLoading = true
      this.expenseList = res;
      console.log(res);
      this.isLoading = false;
    })
  }


  ngOnInit(): void {
      this.isLoading = true;
      this.expenseService.getAllExpenseService();
      this.expenseService.allExpense$.subscribe(res => {
        this.expenseList = res;
      })
      this.isLoading = false;
  }
}
