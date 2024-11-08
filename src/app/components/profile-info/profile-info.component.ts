import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserInit } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit{

  profileForm !: FormGroup;
  isEditing: { [key: string]: boolean } = {
    username: false,
    email: false,
    bio: false,
  };
  showUpdateButton = false;

  @Input('user') 
  user: User = UserInit;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username: [this.user.username, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      bio: [this.user.bio]
    });
  }

  startEditing(field: string): void {
    this.isEditing[field] = true;
    this.showUpdateButton = true;
  }

  saveChanges(): void {
    if (this.profileForm.valid) {
      const confirmation = window.confirm("Êtes-vous sûr de vouloir changer vos informations ?");
      if(confirmation){
        this.user.username = this.profileForm.value.username;
        this.user.email = this.profileForm.value.email;
        this.user.bio = this.profileForm.value.bio;

        this.showUpdateButton = false;
        Object.keys(this.isEditing).forEach(key => this.isEditing[key] = false);
        console.log('Informations mises à jour:', this.user);
      }
      // else {
      //   this.cancelEditing();
      // }
    }
    
  }

  cancelEditing(): void {
    this.profileForm.patchValue({
      username: this.user.username,
      email: this.user.email,
      bio: this.user.bio
    });
    this.showUpdateButton = false;
    Object.keys(this.isEditing).forEach(key => this.isEditing[key] = false);
  }

  private capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
