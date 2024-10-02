import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { IExpense } from '../models/interface/IExpense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseUrl = 'https://expense-tracker-mzw2.onrender.com/api/expenses';

  http = inject(HttpClient);
  auth = inject(AuthService);



  get userId(): string {
    return this.auth.getLoggedInUser()._id;
  }

  getAllExpense() : Observable<IExpense[]> {
    return this.http.get<IExpense[]>(`${this.baseUrl}/${this.userId}`);
  }

  getAllExpenseByMonth(date: Date): Observable<IExpense[]> {
    return this.http.get<IExpense[]>(
      `${this.baseUrl}/query?userId=${
        this.userId
      }&month=${date.getMonth()}&year=${date.getFullYear()}`
    );
  }

  getAllExpenseByDate(date: Date): Observable<any> {
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    console.log(month, year, date.getDate());

    return this.http.get(
      `${this.baseUrl}/${this.userId}/${year}-${month}-${date.getDate()}`
    );
  }

  addExpense(expense: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, expense);
  }

  getLimitedExpense(limit : number) : Observable<IExpense[]> {
    return this.http.get<IExpense[]>(`${this.baseUrl}/page/${this.userId}/${limit}`);
  }
}
