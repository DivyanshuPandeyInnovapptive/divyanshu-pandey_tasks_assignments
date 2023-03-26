import { Component } from '@angular/core';
import { DateserviceService } from './services/dateservice.service';
import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  API_KEY = "e40d07f00b094602953cc3bf8537477e";
  score:number = 0.5;
  today:string = '';
  books: any[];
  myInputMsg: string = 'I am Parent Component';
  msgFromCHild: string;
  outputdata: string = '';

  getDataFromChild(data: any) {
    console.log('Data: ', data);
    this.msgFromCHild = data;
  }

  constructor(private dateService:DateserviceService, private httpClient: HttpClient){}

  ngOnInit(){
    this.today=this.dateService.getTodayDate();
    this.books=this.dateService.getBooks();

    this.fetchDataAsPromise()
    .then((data) => {
      console.log(JSON.stringify(data));
      this.outputdata=JSON.stringify(data);
    })
    .catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });

    const sqnc = new Observable(countOnetoTen).pipe(filter(x => Number(x) % 2 == 0));
    sqnc.subscribe({
      next(num) { console.log(num); }
    });

    function countOnetoTen(observer: any) {
      for(let i = 1; i <= 10; i++) 
        observer.next(i);
      }
      return {unsubscribe(){}}
    }

  fetchDataAsPromise() {
    return this.httpClient
    .get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`
    ) 
    .toPromise();
  }

  product: Object = {
        "productCode": "PROD_P001", "productName": "Laptop", "productPrice": 25000,
        "purchaseDate": "5/12/2017", "productTax": "0.1", "productRating": 4.53
    };
  title = 'app1';
  login_title = 'Login If Account Exists'
  signup_title = 'Create New Account'

  courses: any[] = [
    { id: 1, name: "TypeScript" },
    { id: 2, name: "Angular" },
    { id: 3, name: "Node JS" },
    { id: 4, name: "JavaScript" },
    {id: 5, name: "Html"},
    {id: 6, name: "Css"},
    {id: 7, name: "Python"},
    {id: 8, name: "C++"},
    {id: 9, name: "Java"},
    {id: 10, name: "C"},
  ];

  pastOrders: any[] = [
    { orderId: 2001, productName: "Iphone 11 pro", quantity: 1, billAmount: 1850, transaction:'Completed' },
    { orderId: 2002, productName: "Iphone 10", quantity: 1, billAmount: 990, transaction:'Pending' },
    { orderId: 2003, productName: "Samsung Galaxy S10", quantity: 2, billAmount: 1980, transaction:'Completed' },
    { orderId: 2004, productName: "Motorolla Edge+", quantity: 1, billAmount: 980, transaction:'Pending' }
  ];

  items: any[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}, {name: 'Four', val: 4}, {name: 'Five', val: 5}, {name: 'Six', val: 6}]; 
  selectedValue: string= 'One';
  courseitems: any[] = [{name: 'Node Js', id: 1}, {name: 'Typescript', id: 2}, {name: 'Angular', id: 3}, {name: 'React Js', id: 4}]; 
  selectedCourseValue: number = 1; 

  buttonBackground: string;
  buttonColor: string;

  mouseEnter(){
    this.buttonBackground = 'black';
    this.buttonColor = 'white';
  }

  mouseLeave(){
    this.buttonBackground = 'white';
    this.buttonColor = 'black';
  }
}