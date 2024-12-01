import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from 'src/app/customs/validators/password-validators';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  signupForm!: FormGroup;
  private isLogged: boolean = false;

  constructor(
        private router: Router, 
        private authService: AuthService,
        private fb: FormBuilder,
        private userService: UserService) {}

   ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      bio: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator()]], // Utilisation du validateur custom
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.matchPasswords }); // Validation croisée pour les mots de passe

      this.authService.isLogged$.subscribe((logged)=> {
        this.isLogged = logged;
      });
      if(this.isLogged)
        this.router.navigate(['/profile']);
   }

  onSubmit() {
    if (this.signupForm.valid) {
      const { confirmPassword, ...userData } = this.signupForm.value;
      this.userService.createUser(userData).subscribe(() => {
        console.log('Utilisateur créé avec succès.');
        this.router.navigate(['/login']);
      });
    } else {
      console.log('Formulaire invalide');
    }
  }

  matchPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsDontMatch: true };
  }

}
