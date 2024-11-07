import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {

  isEditingUsername: boolean = false;
  isEditingEmail: boolean = false;
  isEditingBio: boolean = false;
  showUpdateButton: boolean = false;

  user = {
    username: 'alice',
    email: 'alice@example.com',
    bio: 'A passionate blogger about tech and lifestyle.',
    avatarUrl: 'https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg',
    createdAt: '2024-01-01T10:00:00Z'
  };

  constructor() {}

  startEditing(field: string): void {
    if (field === 'username') {
      this.isEditingUsername = true;
    } else if (field === 'email') {
      this.isEditingEmail = true;
    } else if (field === 'bio') {
      this.isEditingBio = true;
    }
    this.showUpdateButton = true;
  }

  saveChanges(): void {
    this.isEditingUsername = false;
    this.isEditingEmail = false;
    this.isEditingBio = false;
    this.showUpdateButton = false;

    // Ici, vous pouvez ajouter la logique pour enregistrer les changements dans la base de données
    console.log('Updated user data:', this.user);
  }

  cancelEditing(): void {
    this.isEditingUsername = false;
    this.isEditingEmail = false;
    this.isEditingBio = false;
    this.showUpdateButton = false;
  }
}
