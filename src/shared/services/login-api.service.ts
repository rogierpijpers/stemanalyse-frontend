import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BaseService } from './base-service';

@Injectable()
export class LoginApiService extends BaseService {
    
    constructor(http: Http) {
        super(http);
    }

    doLogin(username: string, encryptedPass: string) {
        return super.doPost('/login', {username: username, password: encryptedPass});
    }

    private getAccessTokenHeader(accessToken: string): RequestOptions {
        let headers = new Headers();
        headers.append("Access-Token", accessToken);
        let requestOpts = new RequestOptions({headers: headers});
        return requestOpts;
    }
}