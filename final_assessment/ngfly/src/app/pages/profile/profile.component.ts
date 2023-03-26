import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: any = {};
  constructor(private appService: AppService) {
    Auth.currentAuthenticatedUser().then((user) => {
      this.user = user;
      if (user) this.appService.authenticated$.next(true);
    });
  }
}
