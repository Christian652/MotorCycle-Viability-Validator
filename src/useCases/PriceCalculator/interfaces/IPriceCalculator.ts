import { IMotorCycle } from '../../../entities/MotorCycle/interfaces/IMotorCycle';

export interface IPriceCalculator {
  getPrice(motorCycle: IMotorCycle, priceAvg: number): number;
}