import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { language } from 'src/app/models/language.model';
import { User, UserInit, UserSettings } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit{

  settingsForm!: FormGroup;
  availableLanguages: language[] = [];

  @Input('user') 
  user: User = UserInit;
  @Output() settingsUpdated = new EventEmitter<UserSettings>();

  constructor(private fb: FormBuilder, 
              private languageService: LanguageService,
              private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadLanguages();
    if (this.user && this.user.settings) {
      this.settingsForm = this.fb.group({
        emailNotifications: [this.user.settings.emailNotifications || false],
        smsNotifications: [this.user.settings.smsNotifications || false],
        translationLanguage: [this.user.settings.translationLanguage || 'fr', Validators.required]
      });
    }
  }

  onSubmit() {
    if (this.settingsForm.valid) {
      const formData = this.settingsForm.value;
      const updatedSettings: UserSettings = {
        emailNotifications: formData.emailNotifications,
        smsNotifications: formData.smsNotifications,
        translationLanguage: formData.translationLanguage
      };
      if(updatedSettings){
        this.authService.updateUserSettings(this.user.id, updatedSettings).subscribe({
          next: (updatedUser) => {
            this.user = updatedUser;
            alert('Modifications enregistrées avec succès !');
            this.settingsUpdated.emit(updatedSettings);
          },
          error: (err) => alert('Une erreur s\'est produite. Veuillez réessayer.')
        }); 
      }
    } else alert('Veuillez vérifier vos informations.')
  }

  loadLanguages() {
    this.languageService.getAllLanguages().subscribe({
      next: (languages) =>this.availableLanguages = languages,
      error: (err) =>console.error('Erreur lors de la récupération des langues :', err)
    });
  }

}
