import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { APIService } from './API.service';
import { AppBehaviorService } from './app-behavior.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'socialMedia-amplify';
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.appBehaviourService.public_query$.next(true);
    this.api.SearchPosts().then((response) => {
      for (let post of response.items) {
        if (post && post.title) this.options.push(post.title);
      }
    });
    this.appBehaviourService.public_query$.next(false);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  constructor(
    private api: APIService,
    private appBehaviourService: AppBehaviorService
  ) {}
}
