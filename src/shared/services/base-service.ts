import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class BaseService {
    private baseUrl: string = 'http://someserver:8080/somedb';

    constructor(public http: Http) {}

    doGet(url: string, headers?: Headers): Observable<any> {
        if(headers){
            return this.http.get(this.baseUrl + url, {headers: headers})
            .map(response => {
                return response.json();
            });
        }else {
            return this.http.get(this.baseUrl + url).map(response => {
                return response.json();
            });
        }
    }

    doPost(url: string, data: any, headers?: Headers): Observable<any> {
        if(headers) {
            return this.http.post(this.baseUrl + url, data, {headers: headers})
            .map(response => {
                return response.json()
            });
        } else {
            return this.http.post(this.baseUrl + url, data).map(response => {
                return response.json();
            });
        }
    }

    doDelete(url: string, headers?: Headers): Observable<any> {
        console.log(JSON.stringify(headers));
        if(headers) {
            console.log("added headers");
             return this.http.delete(this.baseUrl + url, {headers: headers}).map(response => {
                return response.json();
            });
        } else {
            console.log("ups didnt add headers");
            return this.http.delete(this.baseUrl + url).map(response => {
                return response.json();
            });
            
        }
    }

}

