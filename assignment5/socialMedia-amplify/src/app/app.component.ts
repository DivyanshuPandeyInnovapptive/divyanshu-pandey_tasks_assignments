import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { APIService, Post, SearchablePostFilterInput } from './API.service';
import { AppBehaviorService } from './app-behavior.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'socialMedia-amplify';
  searchTitle = '';
  options: any = [];

  ngOnInit() {}
  search(searchT: string) {
    this.appBehaviourService.public_query$.next(true);
    let input: SearchablePostFilterInput = {
      title: { matchPhrasePrefix: searchT },
    };
    this.api.SearchPosts(input).then((response) => {
      console.log(response);
      this.options = [...response.items];
    });
    this.appBehaviourService.public_query$.next(false);
  }

  constructor(
    private api: APIService,
    private appBehaviourService: AppBehaviorService
  ) {}
}
