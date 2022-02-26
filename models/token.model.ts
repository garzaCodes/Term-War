export interface ITokenUI {
  token: IToken;
  handleToken: any;
  word: string | null;
}

export interface ITokenBar {
  word: string | null;
  handleToken: any;
}

export interface IToken {
  type: string;
  count: number;
  icon: string;
}
