import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddExpenseFormComponent } from "./components/add-expense-form/add-expense-form.component";
import { ExpenseCardComponent } from "./components/expense-card/expense-card.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddExpenseFormComponent, CommonModule, ExpenseCardComponent, NavigationBarComponent, LoginComponent, SignupComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isFormOpen!:boolean


  auth = inject(AuthService)

  get isUserLoggedIn(): boolean {
    return this.auth.getStatus();
  }
}
