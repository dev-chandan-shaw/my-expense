import {
  Component,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AddExpenseFormComponent } from '../add-expense-form/add-expense-form.component';
import { CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [AddExpenseFormComponent, NgClass, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent {

  route = inject(ActivatedRoute)
  
  
  @Input() isAddExpenseFormOpen!: boolean;
  @Output() isAddExpenseFormOpenChange = new EventEmitter<boolean>();

  lastScrollTop = 0;
  isHidden = false;

  openAddExpenseForm() {
    this.isAddExpenseFormOpen = true;
    this.isAddExpenseFormOpenChange.emit(this.isAddExpenseFormOpen);
  }

  @HostListener('window:scroll', ['$event'])
  onWinddowScroll(event: Event) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollTop = scrollTop;
  }
}
