import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { Data } from '../Data';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/moviebookings';

  constructor(private http: HttpClient) { }

  getAllData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }

  deleteData(data: Data) {
    return this.http.delete(`${this.apiUrl}/${data.id}`);
  }

  updateData(data: Data): Observable<Data> {
    data.noOfTickets = Number(data.noOfTickets);
    let date = new Date(data.movieBookingDate).toLocaleString();
    data.movieBookingDate = date.slice(0, date.length - 10);
    console.log(data);
    return this.http.put<Data>(`${this.apiUrl}/${data.id}`, data, httpOptions);
  }

  addData(data: Data): Observable<Data> {
    data.noOfTickets = Number(data.noOfTickets);
    let date = new Date(data.movieBookingDate).toLocaleString();
    data.movieBookingDate = date.slice(0, date.length - 10);
    console.log(data);
    return this.http.post<Data>(`${this.apiUrl}`, data, httpOptions);
  }
}
