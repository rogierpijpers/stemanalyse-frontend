import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard';

import { HomePage } from '../../pages/authenticated/homepage/homepage.component';
import { TestControllerComponent } from '../../pages/authenticated/test-controller/test-controller.component';

const authenticatedRoutes: Routes = [
    { 
      path: 'home', 
      component: HomePage, 
      canActivate: [AuthGuard] 
    },
    { 
      path: 'analyse', 
      component: TestControllerComponent,
      canActivate: [AuthGuard],
    },

];


@NgModule({
  imports: [
    RouterModule.forRoot(authenticatedRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthenticatedRoutingModule {}