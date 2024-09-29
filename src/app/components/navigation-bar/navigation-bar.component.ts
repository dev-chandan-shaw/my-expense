import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddExpenseFormComponent } from "../add-expense-form/add-expense-form.component";
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [AddExpenseFormComponent , NgClass, CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  @Input() isAddExpenseFormOpen!:boolean
  @Output() isAddExpenseFormOpenChange = new EventEmitter<boolean>();

  openAddExpenseForm() {
    this.isAddExpenseFormOpen = true;
    this.isAddExpenseFormOpenChange.emit(this.isAddExpenseFormOpen);
  }

}
