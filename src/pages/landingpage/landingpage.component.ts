import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Authenticator } from '../../shared/authenticator';

@Component({
    moduleId: module.id,
    selector: 'landing-page',
    templateUrl: 'landingpage.component.html'
})
export class LandingPageComponent implements OnInit {
    constructor(public router: Router, public auth: Authenticator) { }

    ngOnInit() {
        if(this.auth.loggedIn) {
            this.router.navigateByUrl('/home');
        }
    }
}