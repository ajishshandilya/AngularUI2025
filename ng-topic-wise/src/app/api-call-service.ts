import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  private todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  //https://jsonplaceholder.typicode.com/photos
  //https://jsonplaceholder.typicode.com/todos

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl).pipe(
      map(response => response as User[])
    );
  }
  getPhotos(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.photosUrl).pipe(
      map(response => response as any[])
    );
  }
  getTodos(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.todosUrl).pipe(
      map(response => response as any[])
    );
  }
}
