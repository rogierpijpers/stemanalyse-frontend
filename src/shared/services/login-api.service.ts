import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BaseService } from './base-service';
import { User } from '../models/user.model';

@Injectable()
export class LoginApiService extends BaseService {
    
    constructor(http: Http) {
        super(http);
    }

    private getUser(): any {
        //stub
        let user = new User();
        user.name = 'Username Test';
        user.token = '1234567890';
        user.unfinished_test = true;
        return Observable.of(user);
    }

    doLogin(username: string, encryptedPass: string) {
        //stub
        //return super.doPost('/login', {username: username, password: encryptedPass});
        if(username == 'admin' && encryptedPass == 'admin'){
            return this.getUser();
        }
        return Observable.of(null);
    }

    getCurrentUser(): any {
        //stub
        return this.getUser()//Observable.of(null);//this.getUser();
    }

    private getAccessTokenHeader(): RequestOptions {
        let accessToken = localStorage.getItem("va:u:token");
        let headers = new Headers();
        headers.append("Access-Token", accessToken);
        let requestOpts = new RequestOptions({headers: headers});
        return requestOpts;
    }
}