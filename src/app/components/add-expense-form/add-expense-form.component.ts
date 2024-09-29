import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  baseUrl = "https://expense-tracker-mzw2.onrender.com/api"

  router = inject(Router)
    

  expenseObj = {
    userId : '',
    category : '',
    price : '',
    note : '',
  }

  http = inject(HttpClient)

  handleAddExpenseRequest() {
    let user = localStorage.getItem('user')
    if (user != null) {
      let LoggedInUser = JSON.parse(user);
      this.expenseObj.userId = LoggedInUser._id;
      this.http.post(`${this.baseUrl}/expenses`, this.expenseObj).subscribe((res : any) => {
        this.closeForm()
      })
    }
  }
  closeForm() {
    this.isAddExpenseFormOpen = false;
    this.isAddExpenseFormOpenChange.emit(this.isAddExpenseFormOpen);
  }
}
