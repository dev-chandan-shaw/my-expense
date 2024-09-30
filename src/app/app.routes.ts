import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from '../service/auth.guard';
import { AddExpenseFormComponent } from './components/add-expense-form/add-expense-form.component';

export const routes: Routes = [
    { path: '', component:HomeComponent, canActivate:[authGuard] },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'add-expense', component: AddExpenseFormComponent, canActivate: [authGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];
