import { Injectable } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public_query$ = new BehaviorSubject<boolean>(false);
  authenticated$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.public_query$.subscribe((type) => {
      if (type === true) {
        Amplify.configure({
          aws_appsync_authenticationType: 'API_KEY',
        });
      } else {
        Amplify.configure({
          aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
        });
      }
    });
  }
}
