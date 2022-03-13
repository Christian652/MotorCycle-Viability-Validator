import { getByModelAndYear } from "../../database/useCases/getByModelAndYear";
import { IMotorCycle } from "../../entities/MotorCycle/interfaces/IMotorCycle";
import { ConservationStates } from "../../enums/conservationStates.enum";
import { PriceVariations } from "../../enums/priceVariations.enum";
import { IPriceCalculator } from "./interfaces/IPriceCalculator";

export class PriceCalculator implements IPriceCalculator {
  getPrice(motorCycle: IMotorCycle, priceAvg: number) {
    const { state, repairs } = motorCycle;

    let priceAcumulator = priceAvg;
        
    if (state == ConservationStates.BAD)
      priceAcumulator += PriceVariations.BAD;

    if (state == ConservationStates.MIDLELIFE)
      priceAcumulator += PriceVariations.MIDLELIFE;

    if (state == ConservationStates.NEW)
      priceAcumulator += PriceVariations.NEW;

    repairs.forEach(repair => priceAcumulator += repair.price);

    return priceAcumulator;
  }
}