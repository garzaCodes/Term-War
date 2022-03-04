import { IRank } from "./rank.model";

export interface IPlayArea {
  correctGuesses: string[];
  showDefinition: boolean;
  totalHealth: boolean[];
  showPromotion: boolean;
  clearPromotion: any;
  gameOver: boolean;
  handleAudio: any;
  gameWon: boolean;
  handleMedic: any;
  handleToken: any;
  definition: any;
  sound: boolean;
  resetGame: any;
  score: number;
  word: string;
  rank: IRank | undefined;
}
