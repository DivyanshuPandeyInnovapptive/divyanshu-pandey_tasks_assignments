import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Post } from 'src/app/API.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  createForm: FormGroup;

  ngOnInit() {}

  public createPost(post: Post) {
    if (post.title !== '' && post.description !== '') {
      this.api
        .CreatePost(post)
        .then(() => {
          console.log('item created!');
          this.createForm.reset();
        })
        .catch((e) => {
          console.log('error creating restaurant...', e);
        });
    }
  }

  // post: Partial<Post> = {
  //   title: 'New Title',
  //   description: 'New Description',
  //   userId: {
  //     id: '640eea0a0af8537bdbc41942',
  //     name: 'Divyanshu Pandey',
  //     email: 'divyanshu@gmail.com',
  //   },
  // };

  // addPost() {
  //   this.store.dispatch(postActions.addPost({ payload: this.post }));
  // }

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      title: [''],
      description: [''],
    });
  }
}
