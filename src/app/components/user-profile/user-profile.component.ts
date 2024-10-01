import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  router = inject(Router)
  logoutUser() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login')
  }
}
