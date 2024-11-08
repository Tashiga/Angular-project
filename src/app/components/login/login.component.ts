import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  private isLogged: boolean = false;

  constructor(private router: Router, 
              private fb: FormBuilder, 
              private authService: AuthService
            ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.authService.isLogged$.subscribe((logged)=> {
      this.isLogged = logged;
    });
    if(this.isLogged)
      this.router.navigate(['/profile']);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log("formulaire : ", { email, password });
      this.authService.login(email, password).subscribe((isLogged) => {
        if (!isLogged) {
          console.log('Email ou mot de passe incorrect.');
        } else {
          console.log('Succés !');
          this.router.navigate(['/profile']);
        }
      });
    } else {
      console.log('Formulaire invalide');
    }
  }

}
