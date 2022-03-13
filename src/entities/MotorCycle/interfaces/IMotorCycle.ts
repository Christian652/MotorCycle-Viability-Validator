import { ConservationStates } from '../../../enums/conservationStates.enum';
import { MotorCycleModels } from '../../../enums/motorCycleModels';
import { MotoRepair } from '../../MotoRepair/MotoRepair';

export interface IMotorCycle {
  model: MotorCycleModels;
  state: ConservationStates;
  price: number;
  repairs: MotoRepair[];
  year: number;
}