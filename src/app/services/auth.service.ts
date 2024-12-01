import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { User, UserSettings } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userInfoSubject: BehaviorSubject<User> = new BehaviorSubject<User>({
    id: 0,
    username: '',
    email: '',
    created_at: '',
    bio: '',
    avatar_url: ''
  });
  public isLogged$: Observable<boolean> = this.isLoggedSubject.asObservable();
  public userInfo$: Observable<User> = this.userInfoSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const storedIsLogged = localStorage.getItem('isLogged');
    if (storedIsLogged === 'true') {
      this.isLoggedSubject.next(true);
      const storedUserInfo = localStorage.getItem('userInfo');
      if (storedUserInfo) 
        this.userInfoSubject.next(JSON.parse(storedUserInfo));
    }
  }

  login(email: string, password: string) : Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
    .pipe(map((users: any) => {
      if (users.length > 0) {
        this.isLoggedSubject.next(true);
        localStorage.setItem('isLogged', 'true');
        this.getUserInfos(email);
        return true;
      } else {
        this.isLoggedSubject.next(false);
        localStorage.removeItem('isLogged');
        console.log("error - please retry ...");
        return false;
      }
    }));
  }

  logout(): void {
    this.isLoggedSubject.next(false);
    this.userInfoSubject.next({id: 0,username: '',email: '',created_at: '',bio: '',avatar_url: ''});
    localStorage.removeItem('isLogged');
    localStorage.removeItem('userInfo');
    this.router.navigate(['/home']);
  }

  private getUserInfos(email: string) {
    this.http.get<any[]>(`${this.apiUrl}?email=${email}`)
    .subscribe((user: any) => {
      if(user && user.length > 0 && user[0]){
        let userInfos : User = {
          id: user[0].id,
          username: user[0].username,
          email: user[0].email,
          created_at: user[0].created_at,
          bio: user[0].bio,
          avatar_url: user[0].avatar_url
        }
        console.log("user get : ", userInfos);
        this.userInfoSubject.next(userInfos);
        localStorage.setItem('userInfo', JSON.stringify(userInfos));
      }
    })
  }

 updateUserSettings(userId: number, settings: UserSettings): Observable<User> {
  return this.userInfo$.pipe(
    switchMap(user => {
      user.settings = settings;
      return this.http.put<User>(`${this.apiUrl}/${userId}`, user).pipe(
        map(updatedUser => {
          this.userInfoSubject.next(updatedUser);
          localStorage.setItem('userInfo', JSON.stringify(updatedUser));
          return updatedUser;
        })
      );
    })
  );
  }

}
