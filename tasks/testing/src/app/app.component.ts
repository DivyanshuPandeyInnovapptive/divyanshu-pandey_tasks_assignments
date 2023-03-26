import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  msg: string;
  val: boolean;
  constructor() {
    this.title = "Thought for the day"
    this.msg = "Success is achived through accurate efforts"
    this.val = false;
  }
  ngOnInit() {}
  show() {
    this.val = true;
    return this.val;
  }
  hide(){
    this.val = false;
    return this.val;
  }
}