import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class BaseService {
    private baseUrl: string = environment.BASE_API_URL;

    constructor(public http: Http) {}

    doGet(url: string, headers?: Headers): Observable<any> {
        if(headers){
            let opts = this.convertToRequestOptions(headers);
            return this.http.get(this.baseUrl + url, opts)
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
            let opts = this.convertToRequestOptions(headers);
            return this.http.post(this.baseUrl + url, data, opts)
            .map(response => {
                return response.json();
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
            let opts = this.convertToRequestOptions(headers);
             return this.http.delete(this.baseUrl + url, opts).map(response => {
                return response.json();
            });
        } else {
            return this.http.delete(this.baseUrl + url).map(response => {
                return response.json();
            });
            
        }
    }

    private convertToRequestOptions(headers: Headers): RequestOptions {
        let opts = new RequestOptions();
        opts.headers = headers;
        return opts;
    }
}

