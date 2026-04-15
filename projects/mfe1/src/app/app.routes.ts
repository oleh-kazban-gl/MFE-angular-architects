import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FLIGHTS_ROUTES } from './flights/flights.routes';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  ...FLIGHTS_ROUTES
];

