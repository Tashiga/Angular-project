import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private router: Router) { }

  onSubmit() {
    // Logique pour enregistrer l'utilisateur (vous pouvez appeler un service d'inscription ici)
    // Pour l'exemple, on navigue simplement vers la page d'accueil après l'inscription réussie
    this.router.navigate(['/home']);
  }

}
