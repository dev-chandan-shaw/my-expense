import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IExpense } from '../models/interface/IExpense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService implements OnInit {
  private baseUrl = 'https://expense-tracker-mzw2.onrender.com/api/expenses';

  http = inject(HttpClient);
  auth = inject(AuthService);

  private allExpenseSubject = new BehaviorSubject<IExpense[]>([]);
  allExpense$ = this.allExpenseSubject.asObservable();

  private recentExpenseSubject = new BehaviorSubject<IExpense[]>([]);
  recentExpense$ = this.recentExpenseSubject.asObservable();



  ngOnInit(): void {
      this.getAllExpenseService();
      this.getRecentExpenseService(10);
  }

  getExpense(user_id : string, expense_id : string) : Observable<IExpense> {
    return this.http.get<IExpense>(`${this.baseUrl}/expense/${user_id}/${expense_id}`)
  }

  getAllExpenseService(){
    this.http.get<IExpense[]>(`${this.baseUrl}/${this.userId}`).subscribe((res : IExpense[]) => {
      this.allExpenseSubject.next(res);
    })
  }

  getRecentExpenseService(limit : number) {
    this.http.get<IExpense[]>(`${this.baseUrl}/page/${this.userId}/${limit}`).subscribe((res : IExpense[]) => {
      this.recentExpenseSubject.next(res);
      console.log(res);
    })
  }




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
