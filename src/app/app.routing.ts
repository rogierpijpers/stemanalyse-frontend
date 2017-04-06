import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LandingPageComponent } from '../pages/landingpage/landingpage.component';
import { PageNotFoundComponent } from '../pages/404/notfound.component';
import { LoginComponent } from '../pages/login/login.component';

const appRoutes: Routes = [
  { path: '',  component:  LandingPageComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}