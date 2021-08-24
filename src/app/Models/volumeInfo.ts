export class VolumeInfo {
  title: string;
  publishedDate: string;
  description: string;
  // readingModes:        ReadingModes;
  pageCount: number;
  printType: string;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  // imageLinks:          ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  constructor(title: string,
    publishedDate: string,
    description: string,
    pageCount: number,
    printType: string,
    maturityRating: string,
    allowAnonLogging: boolean,
    contentVersion: string,
    language: string,
    previewLink: string,
    infoLink: string,
    canonicalVolumeLink: string) {
    this.title = title;
    this.publishedDate = publishedDate;
    this.description = description;
    this.pageCount = pageCount;
    this.printType = printType;
    this.maturityRating = maturityRating;
    this.allowAnonLogging = allowAnonLogging;
    this.contentVersion = contentVersion;
    this.previewLink = previewLink;
    this.infoLink = infoLink;
    this.canonicalVolumeLink = canonicalVolumeLink;
    this.language = language;





  }
}



