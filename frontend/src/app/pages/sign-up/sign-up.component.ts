import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  protected signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private service: AuthService) {
    this.signUpForm = this.fb.nonNullable.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      const loginData = {
        username: this.signUpForm.controls['username'].value,
        password: this.signUpForm.controls['password'].value,
      };

      this.service.signUp(loginData).subscribe({
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
