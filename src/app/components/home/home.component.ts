import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExpenseCardComponent } from "../expense-card/expense-card.component";
import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";
import { CommonModule } from '@angular/common';
import { AddExpenseFormComponent } from "../add-expense-form/add-expense-form.component";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { TotalExpesneCardComponent } from "../total-expesne-card/total-expesne-card.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { RecentTransactionComponent } from "../recent-transaction/recent-transaction.component";
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExpenseCardComponent, NavigationBarComponent, CommonModule, AddExpenseFormComponent, TotalExpesneCardComponent, UserProfileComponent, RecentTransactionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isAddExpenseFormOpen!:boolean

  http = inject(HttpClient)
  auth = inject(AuthService)

  get isUserLoggedIn(): boolean {
    return this.auth.getStatus();
  }
  
}
