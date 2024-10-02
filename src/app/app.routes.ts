import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddExpenseFormComponent } from './components/add-expense-form/add-expense-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { authGuard } from './guards/auth.guard';
import { ViewAllTransactionComponent } from './components/view-all-transaction/view-all-transaction.component';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'add-expense', component: AddExpenseFormComponent, canActivate: [authGuard]},
    { path: 'all-expense', component: ViewAllTransactionComponent, canActivate: [authGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'profile', component: UserProfileComponent}
];
