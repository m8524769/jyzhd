import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
// import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from './model/post';

@Injectable()
export class PostService {
    public postURL = "mock-data/post-mock.json";

    constructor(public http: Http) {
    }

    // public getPost(id:number):Observable<Post>{
    //     return 	this.http
    //     			.get(this.postDetailURL)
    //             	.map((res: Response) => res.json());
    // }
}
