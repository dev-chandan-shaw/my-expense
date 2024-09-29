import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExpenseCardComponent } from "../expense-card/expense-card.component";
import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";
import { CommonModule } from '@angular/common';
import { AddExpenseFormComponent } from "../add-expense-form/add-expense-form.component";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExpenseCardComponent, NavigationBarComponent, CommonModule, AddExpenseFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isAddExpenseFormOpen!:boolean

  expenses : [] = [];

  baseUrl = "https://expense-tracker-mzw2.onrender.com/api"

  http = inject(HttpClient)
  
  ngOnInit(): void {
    let user = localStorage.getItem("user");
        if (user) {
          let loggedInUser = JSON.parse(user);
          let id = loggedInUser._id;
          console.log(id);
          this.http.get(`${this.baseUrl}/expenses/${id}`).subscribe((res : any) => {
            this.expenses = res;
          })
        }
  }

  // ngOnInit(changes: SimpleChanges): void {
  //     let user = localStorage.getItem("user");
  //     if (user) {
  //       let loggedInUser = JSON.parse(user);
  //       let id = loggedInUser._id;
  //       console.log(id);
  //       this.http.get(`http://localhost:8080/api/expenses/${id}`).subscribe((res : any) => {
  //         this.expenses = res;
  //       })
  //     }
  // }
}
