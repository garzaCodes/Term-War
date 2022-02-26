export interface IPlayArea {
  correctGuesses: string[];
  totalHealth: boolean[];
  gameOver: boolean;
  handleAudio: any;
  gameWon: boolean;
  handleMedic: any;
  handleToken: any;
  sound: boolean;
  resetGame: any;
  score: number;
  word: string;
}
