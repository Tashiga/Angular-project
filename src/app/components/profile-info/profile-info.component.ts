import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent {

  @Input() user: any; // Passez les informations utilisateur depuis le composant parent
  isEditing: { [key: string]: boolean } = {
    username: false,
    email: false,
    bio: false,
  };
  showUpdateButton = false;

  constructor(){
    console.log("test - ", this.isEditing);
    console.log("test.username - ", this.isEditing['username']);
  }

  startEditing(field: string): void {
    this.isEditing[field] = true;
    this.showUpdateButton = true;
  }

  saveChanges(): void {
    // Logique pour enregistrer les modifications
    this.showUpdateButton = false;
    Object.keys(this.isEditing).forEach(key => this.isEditing[key] = false);
  }

  cancelEditing(): void {
    this.showUpdateButton = false;
    Object.keys(this.isEditing).forEach(key => this.isEditing[key] = false);
  }

  private capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
