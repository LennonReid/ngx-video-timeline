import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoCellType } from 'ngx-video-timeline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-video-timeline';

  speed: number;
  canvasHeight: number;
  startTimeThreshold: number | string | Date;
  endTimeThreshold: number | string | Date;
  videoCells: VideoCellType[];
  playTime: Date;
  isPlayClick: boolean;
  @ViewChild('videoEle') videoEle!: ElementRef<HTMLVideoElement>

  videoSrc = 'assets/videos/big_buck_bunny_720p_1mb.mp4';
  constructor() {
    this.speed = 1;
    this.isPlayClick = false;
    this.canvasHeight = 80;
    this.startTimeThreshold = new Date();
    this.endTimeThreshold = new Date(new Date().getTime() + (3 * 3600 * 1000));
    this.videoCells = [];
    this.playTime = new Date();
  }

  onPlay(): void {

    this.isPlayClick = true;
    this.startTimeThreshold = new Date().getTime() - 1 * 3600 * 1000;
    this.videoEle.nativeElement?.play();
  }

  onPause(): void {

    this.isPlayClick = false;
    this.videoEle.nativeElement?.pause();
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
          background: '#f3e5e4'
        }
      }
    ];
    this.videoSrc = 'assets/videos/file_example_MP4_480_1_5MG.mp4'
  }

  ngOnInit(): void {
  }
}
