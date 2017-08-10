import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import {HttpModule} from '@angular/http';
import {DemoService} from './_service/demo.service';

@NgModule( {
    declarations: [
        AppComponent,
        DemoComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [DemoService],
    bootstrap: [AppComponent]
} )
export class AppModule { }
