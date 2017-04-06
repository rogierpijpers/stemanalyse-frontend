import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Authenticator } from '../../shared/authenticator';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public auth: Authenticator, public router: Router) { }

    canActivate() {
        if(!this.auth.loggedIn) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    }
}