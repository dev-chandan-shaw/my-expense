import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

interface Expense {
  amount: Number;
  category: string;
  note: string;
  date: Date;
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
  // http://localhost:8080/api/expenses/query?userId=66f83404bdc2373bcf580212&month=8&year=2024

  expenseList: Expense[] = [];

  today = new Date();

  todaysExpenseList : Expense[] = [];

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

  date = new Date();

  currentMonth = this.date.getMonth();
  currentMonthName = this.date.toLocaleString('default', { month: 'short' });
  currentYear = this.date.getUTCFullYear();

  goToPreviousMonth() {
    this.date.setMonth(this.currentMonth - 1);
    this.currentMonth = this.date.getMonth();
    this.currentMonthName = this.date.toLocaleString('default', {
      month: 'short',
    });
    this.currentYear = this.date.getFullYear();
    this.getAllExpense();
  }

  goToNextMonth() {
    this.date.setMonth(this.currentMonth + 1);
    this.currentMonth = this.date.getMonth();
    this.currentMonthName = this.date.toLocaleString('default', {
      month: 'short',
    });
    this.currentYear = this.date.getFullYear();
    this.getAllExpense();
  }

  http = inject(HttpClient);

  getAllExpense() {
    let user = localStorage.getItem('user');
    console.log(this.currentMonth);

    if (user) {
      let parsedUser = JSON.parse(user);
      this.http
        .get<Expense[]>(
          `${this.baseUrl}/query?userId=${parsedUser._id}&month=${this.currentMonth}&year=${this.currentYear}`
        )
        .subscribe((res : any) => {
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
            console.log(amount);
          
            

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
            this.totalExpense += amount;
          });
          
        });
    }
  }
  totalExpense: number = 0;

  getTodaysExpense() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth()+1;
    let year = currentDate.getFullYear();
    let user = localStorage.getItem('user');
    if (user) {
      let loggedInUser = JSON.parse(user);
      const userId = loggedInUser._id;
      this.http.get<Expense[]>(`${this.baseUrl}/${userId}/${year}-${month}-${day}`).subscribe((res : Expense[]) => {
        this.todaysExpenseList = res;
      })
    }
    
  }
}
