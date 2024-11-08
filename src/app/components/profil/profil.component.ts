import { Component, OnInit } from '@angular/core';
import { User, UserInit } from 'src/app/models/user.model';
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
    })
    console.log("checkLoggedStatus : ", this.isLoggedIn);
    console.log("checkuserInfos : ", this.user);
  }

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

    console.log('Updated user data:', this.user);
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
