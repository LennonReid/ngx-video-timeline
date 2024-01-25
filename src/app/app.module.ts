import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxVideoTimelineComponent } from 'ngx-video-timeline';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxVideoTimelineComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
