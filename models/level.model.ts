import { ILevelPlayArea } from "./levelPlayArea.model";

export interface ILevel {
  title: string;
  level: number;
  difficulty: number;
  playArea?: ILevelPlayArea;
}

export interface ILevelUI {
  currentLevel: number;
}
