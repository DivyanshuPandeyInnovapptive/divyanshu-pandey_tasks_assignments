import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { TASKS } from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/api/todos';

  constructor(private http: HttpClient) { }

  // getTasks(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.apiUrl);
  // }

  getTasks(): Observable<any> {
    // this.http.get<any>(this.apiUrl).subscribe(data => console.log(data));
    return this.http.get<any>(this.apiUrl);
  }

  deleteTask(task: Task) {
    return this.http.delete(`${this.apiUrl}/${task._id}`);
  }

  toggleTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.apiUrl}/${task._id}`, task, httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.apiUrl}/${task._id}`, task, httpOptions);
  }

  addTask(task: Task): Observable<any> {
    // console.log(task);
    return this.http.post<Task>(`${this.apiUrl}`, task, httpOptions);
  }
}
