import { Component } from '@angular/core';
import { ApiCallService } from '../../../api-call-service';
import { User } from '../../../models/user.model'
import { CommonModule } from '@angular/common';

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
  }
}
