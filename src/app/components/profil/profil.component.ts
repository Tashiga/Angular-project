import { Component, OnInit } from '@angular/core';
import { User, UserInit, UserSettings } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  isEditingUsername: boolean = false;
  isEditingEmail: boolean = false;
  isEditingBio: boolean = false;
  showUpdateButton: boolean = false;

  user: User = UserInit;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isLogged) => {
      this.isLoggedIn = isLogged;
    });
    this.authService.userInfo$.subscribe((user) => {
      this.user = user;
      if(!user.settings){
        this.user.settings = {
          emailNotifications: false,
          smsNotifications: false,
          translationLanguage: 'fr'
        };
      }
    })
  }

  onSettingsUpdated(updatedSettings: UserSettings): void {
    this.user.settings = updatedSettings;  // Mettez à jour les paramètres de l'utilisateur
    console.log('Paramètres mis à jour:', updatedSettings);
  }

  startEditing(field: string): void {
    if (field === 'username')
      this.isEditingUsername = true;
    else if (field === 'email') 
      this.isEditingEmail = true;
    else if (field === 'bio') 
      this.isEditingBio = true;
    this.showUpdateButton = true;
  }

  saveChanges(): void {
    this.isEditingUsername = false;
    this.isEditingEmail = false;
    this.isEditingBio = false;
    this.showUpdateButton = false;
  }

  cancelEditing(): void {
    this.isEditingUsername = false;
    this.isEditingEmail = false;
    this.isEditingBio = false;
    this.showUpdateButton = false;
  }

  logOut() {
    this.authService.logout();
  }
}
