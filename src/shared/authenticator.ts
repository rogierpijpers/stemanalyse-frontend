import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { LoginApiService } from './services/login-api.service';

@Injectable()
export class Authenticator {

    public loggedIn: boolean;
    public currentUser: any;
    
    private apiToken: string;

    constructor(public loginApi: LoginApiService, public router: Router) {
        this.loggedIn = false;
        this.retrieveUserIfLoggedIn();
    }

    retrieveUserIfLoggedIn() {
        this.loginApi.getCurrentUser().subscribe(data => {
            if(data) {
                this.loggedIn = true;
                this.currentUser = data;
            }
        });
    }

    login(username: string, password: string): any {
        return this.loginApi.doLogin(username, password).map(response => {
            if(response && response.token) {
                localStorage.setItem("va:u:token", response.token);

                this.currentUser = response;
                this.loggedIn = true;

                return true;
            }        
            this.loggedIn = false;
            return false; 
        }, err => {
            this.loggedIn = false;
            return false;
        });
    }

    logout() {
        localStorage.removeItem("va:u:token");
        this.loggedIn = false;
        this.currentUser = undefined;
        this.router.navigateByUrl("/");
    }


}