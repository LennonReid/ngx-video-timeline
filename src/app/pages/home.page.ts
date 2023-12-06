import { NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NgxVideoTimelineComponent, VideoCellType } from "video-timeline";

@Component({
  imports: [NgIf, NgxVideoTimelineComponent],
  selector: "app-home",
  template: `
    <ngx-video-timeline
      [playTime]="playTime"
      [isPlayClick]="isPlayClick"
      [videoCells]="videoCells"
      [startTimeThreshold]="startTimeThreshold"
      [endTimeThreshold]="endTimeThreshold"
      [canvasHeight]="canvasHeight"
      [speed]="speed"
      (playClick)="onPlayClick($event)"
    ></ngx-video-timeline>
    <div>
    @if (isPlayClick) {
      <button mat-button (click)="onPause()">pause</button>
    } @else {
      <button mat-button (click)="onPlay()">play</button>
    }
      <button mat-button (click)="changeVideo()">changeVideos</button>
    </div>
  `,
  styles: ``,
  standalone: true,
})
export default class HomePage implements OnInit {
  title = "ngx-video-timeline";

  speed: number;
  canvasHeight: number;
  startTimeThreshold: number | string | Date;
  endTimeThreshold: number | string | Date;
  videoCells: VideoCellType[];
  playTime: Date;
  isPlayClick: boolean;

  constructor() {
    this.speed = 1;
    this.isPlayClick = false;
    this.canvasHeight = 80;
    this.startTimeThreshold = new Date();
    this.endTimeThreshold = new Date(new Date().getTime() + 3 * 3600 * 1000);
    this.videoCells = [];
    this.playTime = new Date();
  }

  onPlay(): void {
    this.isPlayClick = true;
    this.startTimeThreshold = new Date().getTime() - 1 * 3600 * 1000;
  }

  onPause(): void {
    this.isPlayClick = false;
    // this.endTimeThreshold = new Date().getTime() + 1 * 3600 * 1000;
  }

  onPlayClick(date: number): void {
    // console.log(new Date(date));
    // this.canvasHeight = 60;
  }

  selectedTime(date: any): void {
    this.playTime = date.value;
  }

  changeVideo(): void {
    this.videoCells = [
      {
        beginTime: new Date().getTime() - 1 * 3600 * 1000,
        endTime: new Date().getTime() + 1 * 3600 * 1000,
        style: {
          background: "#f3e5e4",
        },
      },
    ];
  }

  ngOnInit(): void {}
}
