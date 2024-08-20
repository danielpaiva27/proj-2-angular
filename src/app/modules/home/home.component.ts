import { AuthResponse } from 'src/app/models/interfaces/user/auth/AuthResponse';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  sigupForm = this.formBuilder.group({
    name: ['', Validators.required ],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })


  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService,
    private CookieService: CookieService
  ) {}

  onSubmitLoginForm(): void {
    if (this.loginForm.value && this.loginForm.valid){
      this.UserService.authUser(this.loginForm.value as AuthRequest)
      .subscribe({
        next: (response) => {
          if(response) {
            this.CookieService.set('USER_DATA', response.token);
            alert('LOGIN EFETUADO');
            this.loginForm.reset();
          }
        },
        error: (err) => console.log(err)
      })
    }
  }

  onSubmitSiginForm(): void {
    if(this.sigupForm.value && this.sigupForm.valid) {
      this.UserService.signupUser(this.sigupForm.value as SignupUserRequest)
      .subscribe({
        next:(response) => {
          if(response){
            alert('usuario criado com sucesso');
            this.sigupForm.reset();
            this.loginCard = true
          }
        },
        error: (err) => console.log(err)
      })
    }
  }
}
