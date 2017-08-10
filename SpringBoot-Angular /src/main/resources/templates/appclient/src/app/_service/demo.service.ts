import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppConfig } from '../app.config';
@Injectable()
export class DemoService {

    constructor( private http: Http ) { }
    private moc = "http://localhost:8080/home/people";
    getListPerson(): Observable<any[]> {
        //        const headers = new Headers( {
        //            'Content-Type': 'application/json',
        //        } );
        //        headers.append( 'Access-Control-Allow-Headers', 'Content-Type' );
        //        headers.append( 'Access-Control-Allow-Methods', 'GET' );
        //        headers.append( 'Access-Control-Allow-Origin', '*' );

        //        const url = AppConfig.URL_API + '/people/';
        return this.http.get( this.moc ).map( res => res.json() );
    }
}
