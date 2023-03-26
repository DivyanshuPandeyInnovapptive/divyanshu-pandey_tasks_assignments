import { registerLocaleData } from '@angular/common';
import { Component, DoCheck, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy, DoCheck {
  @Input() myInputMsg: string;
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  outputMsg:string = "I am child Component";
  email: string=""
  password: string=""
  result: string=""
  loginSuccess: boolean = false
  loginFailed: boolean = false
  passwordStrength: string = ""

  constructor() {}

  ngOnInit() {
    console.log("LoginComponent.ngOnInit");
    this.myOutput.emit(this.outputMsg);
  }

  ngDoCheck() {
    console.log("LoginComponent.ngDoCheck");
  }

  ngOnDestroy() {
  console.log("LoginComponent.ngOnDestroy");
  }

  checkStrength() :void {
    let reS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let reG = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(reS.test(this.password)) {
      this.passwordStrength = "strong";
    }else if(reG.test(this.password)) {
      this.passwordStrength = "good";
    }else {
      this.passwordStrength = "weak";
    }
  }

  validate = ():void => {
    this.checkStrength()
    if(this.email === 'innovapptive' && this.password === 'password') {
      this.result =  'Login successful'
      this.loginSuccess = true
      this.loginFailed = false
    }else {
      this.result = 'Login Failed'
      this.loginFailed = true
      this.loginSuccess = false
    }
  }
}
