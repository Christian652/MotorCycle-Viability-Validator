import { ConservationStates } from "../../enums/conservationStates.enum";
import { MotorCycleModels } from "../../enums/motorCycleModels";
import { MotoRepair } from "../MotoRepair/MotoRepair";
import { IMotorCycle } from "./interfaces/IMotorCycle";

export class MotorCycle implements IMotorCycle {
  public model: MotorCycleModels
  public year: number
  public price: number
  public state: ConservationStates
  public repairs: MotoRepair[]

  constructor({
    model,
    year,
    price,
    state,
    repairs
  }) {
    this.model = model;
    this.year = year;
    this.price = price;
    this.state = state;
    this.repairs = repairs;
  }
}