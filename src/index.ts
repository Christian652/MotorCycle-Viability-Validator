import { MotorCycle } from "./entities/MotorCycle/MotorCycle";
import { MotoRepair } from "./entities/MotoRepair/MotoRepair";
import { ConservationStates } from "./enums/conservationStates.enum";
import { MotorCycleModels } from "./enums/motorCycleModels";
import { getPrice } from "./useCases/PriceCalculator/getPrice";
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
  state: ConservationStates.MIDLELIFE,
  repairs: brosRepairs
});

// Simulação de Xre 190
const XRE190Repairs = [
  new MotoRepair({ title: "cano da descarga", price: 300 }),
  new MotoRepair({ title: "pneu de tras", price: 150 })
];

const XRE190 = new MotorCycle({
  model: MotorCycleModels.XRE190,
  year: 2016,
  state: ConservationStates.MIDLELIFE,
  repairs: XRE190Repairs
});

printResult(getPrice(bros));
