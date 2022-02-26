import { Keyboard_Constant } from "./keyboard.constant";
import { Levels_Constant } from "./levels.constant";

const Max_Health = 9;

export const DEFAULTS = {
  totalHealthXP: Array(Max_Health).fill(true),
  keyboardConstant: Keyboard_Constant,
  gameLevelConstant: Levels_Constant,
  maxHP: Max_Health,
  hintsAllowed: 1,
};
