import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../../service/expense.service';
import { Expense } from '../../models/class/Expense';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-add-expense-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-expense-form.component.html',
  styleUrl: './add-expense-form.component.css'
})
export class AddExpenseFormComponent {

  @Input() isAddExpenseFormOpen!:boolean
  @Output() isAddExpenseFormOpenChange = new EventEmitter<boolean>();

  router = inject(Router)
  http = inject(HttpClient)
  expesnseService = inject(ExpenseService);
  auth = inject(AuthService);
    

  expense : Expense = new Expense(this.auth.getLoggedInUser()._id);

  
  handleAddExpenseRequest() {
    this.expesnseService.addExpense(this.expense).subscribe(res => {
      this.closeForm()
    })
  }

  closeForm() {
    this.isAddExpenseFormOpen = false;
    this.isAddExpenseFormOpenChange.emit(this.isAddExpenseFormOpen);
  }

}
