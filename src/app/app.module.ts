import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxVideoTimelineModule } from 'ngx-video-timeline';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxVideoTimelineModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
