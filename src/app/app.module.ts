import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelineModule } from 'projects/timeline/src/lib/timeline.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        TimelineModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
