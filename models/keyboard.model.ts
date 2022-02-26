export interface IKeyboard {
  word: string | null;
  handleSelect: any;
  gameOver: boolean;
  buttons: IKey[];
  level: number;
  hint: any;
}

export interface IKeyUI {
  handleSelect: any;
  button: IKey;
  word: string | null;
}

export interface IKey {
  isCorrect: boolean;
  usable: boolean;
  key: string;
}
