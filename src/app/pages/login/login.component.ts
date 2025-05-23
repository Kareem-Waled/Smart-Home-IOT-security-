import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
  if (this.email && this.password) {
    localStorage.setItem('user', JSON.stringify({ email: this.email }));
    this.router.navigateByUrl('/splash'); // ✅ توجهه إلى Splash
  } else {
    alert('من فضلك أدخل البريد وكلمة المرور');
  }
}


}
