import { VolumeInfo } from "./volumeInfo";

export class Items {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  constructor(kind: string, id: string, etag: string, selfLink: string, volumeInfo: VolumeInfo) {
    this.kind = kind;
    this.id = id;
    this.etag = etag;
    this.selfLink = selfLink;
    this.volumeInfo = volumeInfo;

  }
}
