import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginDetails  = {
    email : "",
    password : "",
  }
  baseUrl = "https://expense-tracker-mzw2.onrender.com/api"

  http = inject(HttpClient);
  router = inject(Router);
  auth = inject(AuthService);

  onLogin() {
    this.http.post(`${this.baseUrl}/users/login`, this.loginDetails).subscribe((res : any) => {
      if (res) {
        this.auth.login(res)
        this.router.navigateByUrl('/home')
      }
      
    }, err => {
      console.log("Error while login", err.message);
    })
  }

}
