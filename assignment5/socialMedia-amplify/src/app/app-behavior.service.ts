import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Amplify } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AppBehaviorService {
  update_title$ = new BehaviorSubject<string>('');
  update_description$ = new BehaviorSubject<string>('');
  update_id$ = new BehaviorSubject<string>('');
  update_show$ = new BehaviorSubject<boolean>(false);
  public_query$ = new BehaviorSubject<boolean>(false);

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
