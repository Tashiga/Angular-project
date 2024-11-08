import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'new-article', component: ArticleFormComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticlePageComponent },
  { path: 'profile', component: ProfilComponent },
  { path: 'user-profile/:username', component: ArticlePageComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
