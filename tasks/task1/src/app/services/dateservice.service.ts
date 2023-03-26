import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) 
export class DateserviceService {

  books: any[] = [
    {id: '1', name: 'Book 1', price: '1.00'},
    {id: '2', name: 'Book 2', price: '2.00'},
    {id: '3', name: 'Book 3', price: '3.00'}
  ]

  constructor() {}

  getBooks() {
    return this.books;
  }

  getTodayDate(): any{
    return new Date();
  }
}
