import { IToken } from "./token.model";

export interface Account {
  currentLevel: number;
  totalScore: number;
  tokens: IToken[];
  username: string;
  email: string;
  created: any;
  uid: string;
  xp: number;
}
