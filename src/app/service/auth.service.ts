import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  ngOnInit(): void {
      
  }

  private isLoggedIn: boolean = false;

  login(user : any) {
    this.isLoggedIn = true;
    localStorage.setItem('user', JSON.stringify(user))
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }

  getStatus() : boolean {
    let user = localStorage.getItem('user');
    if (user) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  getLoggedInUser() {
    let user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
  }


}
