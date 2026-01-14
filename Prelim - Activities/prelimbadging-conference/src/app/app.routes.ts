import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { OurPartnersComponent } from './our-partners/our-partners';
import { AboutTheOrgComponent } from './about-the-org/about-the-org';
import { JoinUsComponent } from './join-us/join-us';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'our-partners', component: OurPartnersComponent },
  { path: 'about-the-organization', component: AboutTheOrgComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];
