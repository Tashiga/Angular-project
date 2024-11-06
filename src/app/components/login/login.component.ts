import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) { }

    onSubmit() {
    // Logique pour traiter l'authentification (vous pouvez appeler un service d'authentification ici)
    // Pour l'exemple, on navigue simplement vers la page d'accueil après l'authentification réussie
    this.router.navigate(['/home']);
  }

}
