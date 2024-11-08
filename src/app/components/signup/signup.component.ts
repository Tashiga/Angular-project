import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  private isLogged: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

   ngOnInit(): void {
      this.authService.isLogged$.subscribe((logged)=> {
        this.isLogged = logged;
      });
      if(this.isLogged)
        this.router.navigate(['/profile']);
   }

  onSubmit() {
    // Logique pour enregistrer l'utilisateur (vous pouvez appeler un service d'inscription ici)
    // Pour l'exemple, on navigue simplement vers la page d'accueil après l'inscription réussie
    this.router.navigate(['/login']);
  }

}
