import { Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { ExpenseService } from '../../service/expense.service';
import { IExpense } from '../../models/interface/IExpense';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit {
  @ViewChild('expenseListDiv') expenseListDiv!: ElementRef;

  expenseList: IExpense[] = [];
  filteredList: IExpense[] = [];

  expenseService = inject(ExpenseService);

  ngOnInit(): void {
    this.loadExpense();
  }

  loadExpense() {
    this.expenseService.getAllExpense().subscribe((res: IExpense[]) => {
      this.expenseList = res;
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!this.expenseListDiv.nativeElement.contains(clickedElement)) {
      this.filteredList = [];
    }
  }

  searchUser(event: Event): void {
    const target = event.target as HTMLInputElement;
    const searchQuery = target.value.toLowerCase();

    if (searchQuery.length > 0) {
      console.log(searchQuery);
      this.filteredList = this.expenseList.filter((value) =>
        value.note.toLowerCase().includes(searchQuery) || value.category.toLowerCase().includes(searchQuery)
      );
      console.log(this.filteredList);
      console.log(this.expenseList);
    } else {
      this.filteredList = []
    }
  }
}
