import { Component, OnInit } from '@angular/core';
import { User, UserInit } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isLogged: boolean = false;
  user : User = UserInit;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      this.authService.isLogged$.subscribe((isLogged) => {
        this.isLogged = isLogged; 
        console.log("LOGGED -> ", this.isLogged);
      });
      this.authService.userInfo$.subscribe((user) => {
        this.user = user;
        console.log("USER -> ", this.user);
      });
  }

  logout(): void {
    this.authService.logout();
  }

}
