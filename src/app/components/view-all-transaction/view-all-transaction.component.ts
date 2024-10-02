import { Component, inject, OnInit } from '@angular/core';
import { IExpense } from '../../models/interface/IExpense';
import { ExpenseService } from '../../service/expense.service';
import { ExpenseCardComponent } from "../expense-card/expense-card.component";
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-view-all-transaction',
  standalone: true,
  imports: [ExpenseCardComponent, CommonModule, MatProgressSpinnerModule],
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
      this.getAllExpense()
  }
}
