import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
export class AddExpenseFormComponent implements OnInit{

  @Input() isAddExpenseFormOpen!:boolean
  @Output() isAddExpenseFormOpenChange = new EventEmitter<boolean>();

  router = inject(Router)
  http = inject(HttpClient)
  expesnseService = inject(ExpenseService);
  auth = inject(AuthService);
  route = inject(ActivatedRoute)

  whiteList = ['view-all']

  check() {
    console.log(this.route.url);
  }

  ngOnInit(): void {
      this.check()
  }
    

  expense : Expense = new Expense(this.auth.getLoggedInUser()._id);

  
  handleAddExpenseRequest() {
    this.expesnseService.addExpense(this.expense).subscribe(res => {
      console.log(this.expense);
      this.expesnseService.getRecentExpenseService(10)
      this.closeForm()
    })
  }

  closeForm() {
    this.isAddExpenseFormOpen = false;
    this.isAddExpenseFormOpenChange.emit(this.isAddExpenseFormOpen);
  }

}
