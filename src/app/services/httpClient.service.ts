import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConstant } from '../utility';

import { IWaitLoader } from '../interface/IWaitLoader';

@Injectable()
export class HttpClientService {

    constructor(private http: Http) { }

    postAsync(api: string, body: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(api, body, this.getToken())
                .map((res: Response) => res.json())
                .subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getAsync(api: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(api, this.getToken())
                .map((res: Response) => res.json())
                .subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    reject(err);
                });
        });
    }

    uploadAsync(api: string, file: any, body: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            if (file) {
                formData.append('logo', file, 'tempName.jpeg');
            }
            // tslint:disable-next-line:forin
            for (const key in body) {
                formData.append (key, body[key]);
            }

            this.http.post(api, formData, this.getToken())
                .map((res: Response) => res.json())
                .subscribe((data) => {
                    resolve(data);
                }, (err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }



    // Private Methods
    private getToken(): any {
        // create authorization header with jwt token
        const token = JSON.parse(localStorage.getItem(AppConstant.authToken));
        if (token) {
            const headers = new Headers({ 'Authorization': token });
            return new RequestOptions({ headers: headers });
        }
    }
}
