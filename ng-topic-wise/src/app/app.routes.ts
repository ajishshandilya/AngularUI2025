import { Routes } from '@angular/router';
import { ApiCall } from './app-home/topics/api-call/api-call';
import { AppHome } from './app-home/app-home';

export const routes: Routes = [
  { path: 'api-call', component: ApiCall },
  { path: 'home', component: AppHome },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
