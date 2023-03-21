import { Component } from '@angular/core';
import { APIService, UpdatePostInput } from 'src/app/API.service';
import { AppBehaviorService } from 'src/app/app-behavior.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent {
  temp_post_id: string = '';
  temp_post_title: string = '';
  temp_post_description: string = '';
  show = false;

  hideComponent() {
    this.appBehaviourService.update_show$.next(false);
    this.appBehaviourService.update_id$.next('');
    this.appBehaviourService.update_title$.next('');
    this.appBehaviourService.update_description$.next('');
  }

  updatePost(input: UpdatePostInput) {
    this.api.UpdatePost(input).then((data) => {
      console.log(data);
    });
    this.hideComponent();
  }

  constructor(
    private api: APIService,
    private appBehaviourService: AppBehaviorService
  ) {
    this.appBehaviourService.update_id$.subscribe((id) => {
      this.temp_post_id = id;
    });
    this.appBehaviourService.update_show$.subscribe((show) => {
      this.show = show;
    });
    this.appBehaviourService.update_title$.subscribe((value) => {
      this.temp_post_title = value;
    });
    this.appBehaviourService.update_description$.subscribe((value) => {
      this.temp_post_description = value;
    });
  }
}
