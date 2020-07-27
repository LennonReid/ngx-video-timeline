import { NgModule } from '@angular/core';
import { TimelineComponent } from './timeline.component';
import {CommonModule} from '@angular/common';



@NgModule({
    declarations: [TimelineComponent],
  imports: [
    CommonModule
  ],
    exports: [TimelineComponent]
})
export class TimelineModule { }
