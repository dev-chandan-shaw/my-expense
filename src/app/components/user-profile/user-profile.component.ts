import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  router = inject(Router)
  auth = inject(AuthService)
  get loggedInUser() {
    return this.auth.getLoggedInUser();
  }
  logoutUser() {
    this.auth.logout();
    this.router.navigateByUrl('/login')
  }
}
