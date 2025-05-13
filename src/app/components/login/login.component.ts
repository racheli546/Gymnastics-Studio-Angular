import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, NgModel, ReactiveFormsModule, Validators, FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
// import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf,FormsModule,MatFormFieldModule,MatInputModule,MatButton,MatTooltip],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, public userService: UsersService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  user: any = '';

  onSubmit() {

    // this.listUsers = this.userService.getUserData();
    this.user = this.userService.getUserByEmail(this.loginForm.value.email);
    if(!this.user) {
      alert('User not exsist');
      return;
    }
    if(this.user.password != this.loginForm.value.password)
    {
      alert('Password is incorrect');
      return;
    }
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      if (this.user.role == 'Teacher') {
        this.router.navigate(['/lessonList']);
      } else {
        this.router.navigate(['/registrantsList']);
      }
    }
    else {
      console.log('Form is invalid');
    }
  }
}
