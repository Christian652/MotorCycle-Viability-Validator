import { IMotoRepair } from "./interfaces/IMotoRepair";

export class MotoRepair implements IMotoRepair {
  public title: string;
  public price: number;
  
  constructor({
      title,
      price,
  }) {
    this.title = title;
    this.price = price;
  }
}