import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesComponent } from './components/articles/articles.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ConnectionHistoryComponent } from './components/connection-history/connection-history.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { ArticleCommentComponent } from './components/article-comment/article-comment.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorPageComponent,
    LoginComponent,
    SignupComponent,
    ArticleFormComponent,
    ArticlesComponent,
    ProfilComponent,
    ProfileInfoComponent,
    ConnectionHistoryComponent,
    AccountSettingsComponent,
    ArticleCommentComponent,
    ArticlePageComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
