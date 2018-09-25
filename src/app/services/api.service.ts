/**
 * Importing angular dependencies here
 */
import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * Importing all the internal dependencies here
 */
import { Constants } from '../constants';

@Injectable()
export class ApiService {

    constructor(private http: Http) { }

    /**
     * This function create the header of the http requests
     * @param contentType : content type of the http request
     */
    createHttpHeaders(contentType) {
        const headers = new Headers();
        headers.append('Content-type', contentType);
        const options = new RequestOptions({ headers: headers });
        return options;
    }

    /**
     * This function send the http GET request to the server
     * @param url : url of the get request
     * @returns Observable
     */
    doGetReuqest(url: string): Observable<Object> {
        const options = this.createHttpHeaders(Constants.JSON_TYPE);
        // TO CHECK: if it works on server without parsing the response as res.json
        return this.http.get(url, options).map((res: Response) => res);
    }
}
