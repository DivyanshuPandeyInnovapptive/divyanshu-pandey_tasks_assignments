import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAuthenticated = false;
  constructor(private appService: AppService) {
    this.appService.authenticated$.subscribe((data) => {
      if (data) this.isAuthenticated = true;
      else this.isAuthenticated = false;
    });
  }
  signOut() {
    Auth.signOut();
    this.appService.authenticated$.next(false);
  }
}
