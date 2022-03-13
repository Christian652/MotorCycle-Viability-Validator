import { getByModelAndYear } from "../../database/useCases/getByModelAndYear";
import { IMotorCycle } from "../../entities/MotorCycle/interfaces/IMotorCycle";
import { PriceCalculator } from "./PriceCalculator";

export function getPrice(motorCycle: IMotorCycle): number {
  const { model, year } = motorCycle;
  
  const calculator = new PriceCalculator();
  const { priceAvg } = getByModelAndYear(model, year);

  return calculator.getPrice(motorCycle, priceAvg);
}