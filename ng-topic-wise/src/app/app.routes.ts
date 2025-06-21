import { Routes } from '@angular/router';
import { ApiCall } from './app-home/topics/api-call/api-call';
import { AppHome } from './app-home/app-home';
import { TempletDrivenForm } from './app-home/topics/templet-driven-form/templet-driven-form';
import { ReactiveForms } from './app-home/topics/reactive-forms/reactive-forms';

export const routes: Routes = [
  { path: 'api-call', component: ApiCall },
  { path: 'home', component: AppHome },
  { path: 'template-driven-forms', component: TempletDrivenForm },
  { path: 'reactive-forms', component: ReactiveForms },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
