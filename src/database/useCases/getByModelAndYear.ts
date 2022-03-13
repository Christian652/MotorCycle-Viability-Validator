import { MotorCycleModels } from "../../enums/motorCycleModels";
import { data } from "../data";

export function getByModelAndYear(model: MotorCycleModels, year: number) {
  const founded = data.find(item => {
    const isModelEquals = item.model == model;
    const isYearEquals = item.year == year;

    return isModelEquals && isYearEquals;
  });

  if (founded) return founded;

  throw new Error("Not Found Motor Price Avg")
}