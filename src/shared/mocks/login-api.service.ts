import { SpyObject } from './helper';
import { LoginApiService } from '../services/login-api.service';
import Spy = jasmine.Spy;
import { Observable } from 'rxjs/Observable';

export class MockLoginApi extends SpyObject {
    doLoginSpy: Spy;

    count: number;
    fakeResponse: any[];

    constructor() {
        super(LoginApiService);
        this.fakeResponse = [];
        this.count = 0;

        this.doLoginSpy = this.spy('doLogin').andReturn(this);
    }

    subscribe(callback: any) {
        callback(this.fakeResponse[this.count]);
        this.count++;
    }

    clearResponse(): void {
        this.count = 0;
        this.fakeResponse = [];
    }

    addResponse(json: any): void {
        this.fakeResponse.push(json);
    }
}