import { NgModule } from '@angular/core';
import { NgxVideoTimelineComponent } from './timeline.component';
import {CommonModule} from '@angular/common';



@NgModule({
    declarations: [NgxVideoTimelineComponent],
    imports: [
      CommonModule
    ],
    exports: [NgxVideoTimelineComponent]
})
export class NgxVideoTimelineModule { }
