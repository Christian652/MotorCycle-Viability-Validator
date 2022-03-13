import { MotorCycle } from "./entities/MotorCycle/MotorCycle";
import { MotoRepair } from "./entities/MotoRepair/MotoRepair";
import { ConservationStates } from "./enums/conservationStates.enum";
import { MotorCycleModels } from "./enums/motorCycleModels";
import { getIdealPrice } from "./useCases/PriceCalculator/getIdealPrice";
import { printResult } from "./utils/printResult";

// deixei abaixo algumas simulações para entender como funciona
// fique a vontade para mudar os valores e adicionar novos nos enums

// Simulação de uma Bros
const brosRepairs = [
  new MotoRepair({ title: "cano da descarga", price: 300 }),
  new MotoRepair({ title: "pneu de tras", price: 150 })
];

const bros = new MotorCycle({
  model: MotorCycleModels.BROS,
  year: 2016,
  price: 20000,
  state: ConservationStates.MIDLELIFE,
  repairs: brosRepairs
});

printResult(bros);
