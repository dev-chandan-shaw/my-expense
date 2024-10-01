import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ExpenseService } from '../../service/expense.service';

interface Expense {
  amount: Number;
  category: string;
  note: string;
  date: Date;
}

interface Category {
  category_name : string,
  total_expense : number,
  total_transaction : number
}

@Component({
  selector: 'app-total-expesne-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './total-expesne-card.component.html',
  styleUrl: './total-expesne-card.component.css',
})
export class TotalExpesneCardComponent implements OnInit {
  baseUrl = 'https://expense-tracker-mzw2.onrender.com/api/expenses';

  expenseList: Expense[] = [];

  today = new Date();

  todaysExpenseList: Expense[] = [];

  totalExpense: number = 0;

  auth = inject(AuthService);
  expenseService = inject(ExpenseService);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllExpense();
    this.getTodaysExpense();
  }

  category = [
    {
      categoryName: 'Food/Drink',
      totalTranscation: 0,
      totalExpense: 0,
    },
    {
      categoryName: 'Shopping',
      totalTranscation: 0,
      totalExpense: 0,
    },
    {
      categoryName: 'Bill/Recharge',
      totalTranscation: 0,
      totalExpense: 0,
    },
    {
      categoryName: 'Transport',
      totalTranscation: 0,
      totalExpense: 0,
    },
  ];

  currentDate = new Date();

  currentMonth = this.currentDate.getMonth();

  currentMonthName = this.currentDate.toLocaleString('default', {
    month: 'short',
  });

  currentYear = this.currentDate.getUTCFullYear();

  goToPreviousMonth() {
    this.currentDate.setMonth(this.currentMonth - 1);
    this.currentMonth = this.currentDate.getMonth();
    this.currentMonthName = this.currentDate.toLocaleString('default', {
      month: 'short',
    });
    this.currentYear = this.currentDate.getFullYear();
    this.getAllExpense();
  }

  goToNextMonth() {
    this.currentDate.setMonth(this.currentMonth + 1);
    this.currentMonth = this.currentDate.getMonth();
    this.currentMonthName = this.currentDate.toLocaleString('default', {
      month: 'short',
    });
    this.currentYear = this.currentDate.getFullYear();
    this.getAllExpense();
  }


  getAllExpense() {
    this.expenseService
      .getAllExpenseByMonth(this.currentDate)
      .subscribe((res) => {
        this.expenseList = res;
        console.log(this.expenseList);
        this.totalExpense = 0;

        this.category.map((item) => {
          item.totalExpense = 0;
          item.totalTranscation = 0;
        });

        this.expenseList.map((expense) => {
          const amount =
            typeof expense.amount === 'number'
              ? expense.amount
              : Number(expense.amount);
          this.updateCategoryDetails(amount, expense);
          this.totalExpense += amount;
        });
      });
  }
  

  updateCategoryDetails(amount: number, expense: Expense) {
    if (expense.category === 'Food/Drink') {
      this.category[0].totalExpense += amount;
      this.category[0].totalTranscation += 1;
    } else if (expense.category === 'Shopping') {
      this.category[1].totalExpense += amount;
      this.category[1].totalTranscation += 1;
    } else if (expense.category === 'Bill/Recharge') {
      this.category[2].totalExpense += amount;
      this.category[2].totalTranscation += 1;
    } else if (expense.category === 'Transport') {
      this.category[3].totalExpense += amount;
      this.category[3].totalTranscation += 1;
    }
  }

  getTodaysExpense() {
    let date = new Date();
    this.expenseService.getAllExpenseByDate(date).subscribe((res) => {
      console.log(res);
      this.todaysExpenseList = res;
    });
  }


}
