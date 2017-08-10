import { Component, OnInit } from '@angular/core';
import { DemoService } from '../_service/demo.service';
@Component( {
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.css']
} )
export class DemoComponent implements OnInit {

    constructor( private service: DemoService ) { }
    public person: any;
    ngOnInit() {
        this.service.getListPerson()
            .subscribe(
            ( res: any ) => {
                this.person = res;
                console.log( res );
            },
            ( error ) => console.log( error )
            );
    }
}
