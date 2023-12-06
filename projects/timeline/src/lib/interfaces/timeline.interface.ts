export interface CanvasPos {
  posX: number;
  posY: number;
}

export interface VideoCellStyleType {
  background: string;
}

export interface VideoCellType {
  beginTime: number | string;
  endTime: number | string;
  style?: VideoCellStyleType;
}
