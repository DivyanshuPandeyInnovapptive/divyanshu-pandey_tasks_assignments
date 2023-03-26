import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('title should say Thought for the day',() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Thought for the day');
  })
  it('Should display message', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.show()).toBeTruthy();
  });
  it('Should hide message', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.hide()).toBeFalsy();
  });
  it('Message',() =>{
    const fixture = TestBed.createComponent(AppComponent);
    let a1 = fixture.nativeElement.querySelectorAll('div')
    let value = a1[1].innerHTML.trim; 
    expect(value).toEqual('Success is achived through accurate efforts'.trim) 
  })
});
