import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  baseUrl = "https://expense-tracker-mzw2.onrender.com/api"

  userObj:any =  {
    first_name : '',
    last_name : '',
    email : '',
    password : '',
  }

  http = inject(HttpClient);
  router = inject(Router)
  auth = inject(AuthService)

  onSingup() {
    this.http.post(`${this.baseUrl}/users`, this.userObj).subscribe((res : any) => {
      if (res) {
        this.auth.login(res.data)
        this.router.navigateByUrl('/home')
      } 
    })
  }
}
