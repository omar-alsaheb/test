import { Items } from "./item";

export class BooksModel {
  kind: string;
  totalItems: number;
  items: Items[];

  constructor(kind: string,totalItems: number,items: Items[]){
    this.kind=kind;
    this.totalItems=totalItems;
    this.items=items;
  }
}

