import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddExpenseFormComponent } from "./components/add-expense-form/add-expense-form.component";
import { ExpenseCardComponent } from "./components/expense-card/expense-card.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddExpenseFormComponent, ExpenseCardComponent, NavigationBarComponent, LoginComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expense_tracker';
}
