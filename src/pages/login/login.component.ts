import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Authenticator } from '../../shared/authenticator';

@Component({
    selector: 'login-page',
    templateUrl: 'login-page.component.html',
    styleUrls: ['login.css']
})
export class LoginComponent implements OnInit {
    errorMessage: string = 'Verkeerde gebruikersnaam en/of wachtwoord';
    showError: boolean = false;

    username: string;
    password: string;

    constructor(public auth: Authenticator, public router: Router) { }

    ngOnInit() {
        if(this.auth.loggedIn) {
            this.router.navigateByUrl("/");
        }
    }

    login() {
        this.showError = false;
        this.auth.login(this.username, this.password).subscribe(result => {
            if(result) {
                this.router.navigateByUrl("/");
            } else {
                this.showError = true;
            }
        });
    }
}