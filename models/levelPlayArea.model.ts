import { IVehicle } from "./vehicle.model";

export interface ILevelPlayArea {
  backgroundImage?: string;
  enemyVehicle?: IVehicle;
  myVehicle?: IVehicle;
}
