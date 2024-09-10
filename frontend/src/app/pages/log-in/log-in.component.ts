import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/hello.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent {
  protected loginForm: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService) {
    this.loginForm = this.fb.nonNullable.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginData = {
        username: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value,
      };

      this.service.login(loginData).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.accessToken);
          console.log(this.service.isAuthenticated());
        },
        error: (error) => {
          console.error('Login Error:', error, loginData);
        },
      });
    }
  }
}
