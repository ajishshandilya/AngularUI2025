import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl).pipe(
      map(response => response as User[])
    );
  }
}
