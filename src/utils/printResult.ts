import { IMotorCycle } from "../entities/MotorCycle/interfaces/IMotorCycle";
import { ConservationStates } from "../enums/conservationStates.enum";
import { MotorCycleModels } from "../enums/motorCycleModels";
import { getIdealPrice } from "../useCases/PriceCalculator/getIdealPrice";

export function printResult(motorCycle: IMotorCycle) {
  const idealPrice = getIdealPrice(motorCycle);

  const repairsToString = motorCycle.repairs.map(item => `${item.title}: ${item.price}BRL`).join(" ")

  console.log(`
  ====================================================
  temos aqui uma ${MotorCycleModels[motorCycle.model]} ${motorCycle.year} ${motorCycle.state}
  com ${motorCycle.repairs.length} reparos a fazer
  
  Reparos:
  ${repairsToString}

  o preço ideal nessas condições é:
  ${idealPrice}BRL
  
  porém estão pedindo:
  ${motorCycle.price}BRL
  
  portanto ${motorCycle.price > idealPrice ? 'Não Compensa' : 'Compensa'}!
  ====================================================
  `);
}