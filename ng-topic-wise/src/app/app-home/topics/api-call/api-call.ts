import { Component } from '@angular/core';
import { ApiCallService } from '../../../api-call-service';
import { User } from '../../../models/user.model'
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-api-call',
  imports: [CommonModule],
  templateUrl: './api-call.html',
  styleUrl: './api-call.scss'
})
export class ApiCall {

  constructor(private apiCallService: ApiCallService){}

  users: User[] = [];
  ngOnInit(){
    this.apiCallService.getData().subscribe((data: User[])=>{
      this.users = data;
    });

    // forkjoin example with an array
    // forkJoin(([this.apiCallService.getData(), this.apiCallService.getPhotos(), this.apiCallService.getTodos()])).subscribe({
    //   next: ([user, photos, todos]) => {
    //     console.log(user, photos, todos);
    //   },

    // forkjoin example with an object
    forkJoin({
      users: this.apiCallService.getData(),
      photos: this.apiCallService.getPhotos(),
      todos: this.apiCallService.getTodos()
    }).subscribe({
      next: ({users,photos,todos})=>{
        console.log(users, photos, todos);
      },
      error: (error) => {
        console.error('Error fetching data', error);
      } 
    });
  }
}
