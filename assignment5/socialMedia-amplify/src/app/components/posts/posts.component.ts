import { Component } from '@angular/core';
import {
  APIService,
  CreateCommentInput,
  DeletePostInput,
  ModelCommentFilterInput,
  Post,
} from 'src/app/API.service';
import { ZenObservable } from 'zen-observable-ts';
import { Amplify } from 'aws-amplify';
import { AppBehaviorService } from 'src/app/app-behavior.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  public posts: Array<Post> = [];
  private addSub: ZenObservable.Subscription | null = null;
  private updateSub: ZenObservable.Subscription | null = null;
  private createCommentSub: ZenObservable.Subscription | null = null;

  user = {
    username: '',
    email: '',
  };
  temp_comments: any = {};
  post_comments: any = {};

  addComment(post: Post) {
    console.log(this.temp_comments[post.id], post.username, post.id);
    // todo add comment
    let input: CreateCommentInput = {
      content: this.temp_comments[post.id],
      postCommentsId: post.id,
    };
    this.api.CreateComment(input);
    this.temp_comments[post.id] = '';
  }

  updatePost(post: Post) {
    this.appBehaviourService.update_id$.next(post.id);
    this.appBehaviourService.update_show$.next(true);
    this.appBehaviourService.update_description$.next(post.description);
    this.appBehaviourService.update_title$.next(post.title);
  }

  deletePost(deletePostInput: DeletePostInput) {
    this.api.DeletePost(deletePostInput).then((data) => {
      this.posts = this.posts.filter((post) => post.id !== deletePostInput.id);
    });
  }

  ngOnInit() {
    Amplify.Auth.currentUserInfo().then((data: any) => {
      this.user.username = data.username;
      this.user.email = data.attributes.email;
    });

    this.appBehaviourService.public_query$.next(true);
    this.api.ListPosts().then((event) => {
      console.log('posts: ', event);
      this.posts = event.items as Post[];
      for (let post of this.posts) {
        let input: ModelCommentFilterInput = {
          postCommentsId: {
            eq: post?.id,
          },
        };
        let comments: any = [];
        this.appBehaviourService.public_query$.next(true);
        this.api.ListComments(input).then((data) => {
          // console.log(data);
          comments = data.items;
          comments.post = null;
          this.post_comments[post.id] = comments;
          // console.log(
          //   'postId: ',
          //   post.id,
          //   'comments: ',
          //   this.post_comments[post.id]
          // );
        });
        this.appBehaviourService.public_query$.next(false);
      }
    });

    this.addSub = this.api.OnCreatePostListener().subscribe((event: any) => {
      const newPost = event.value.data.onCreatePost;
      this.posts = [newPost, ...this.posts];
    });

    this.updateSub = this.api.OnUpdatePostListener().subscribe((event: any) => {
      const updatedPost = event.value.data.onUpdatePost;
      this.posts = this.posts.map((post) => {
        if (post.id === updatedPost.id) return updatedPost;
        else return post;
      });
    });

    this.createCommentSub = this.api
      .OnCreateCommentListener()
      .subscribe((event: any) => {
        const newComment = event.value.data.onCreateComment;
        this.post_comments[newComment.postCommentsId].push(newComment);
      });

    this.appBehaviourService.public_query$.next(false);
  }

  ngOnDestroy() {
    if (this.addSub) this.addSub.unsubscribe();
    if (this.updateSub) this.updateSub.unsubscribe();
    if (this.createCommentSub) this.createCommentSub.unsubscribe();
    this.addSub = null;
    this.updateSub = null;
    this.createCommentSub = null;
  }

  constructor(
    private api: APIService,
    private appBehaviourService: AppBehaviorService
  ) {}
}
