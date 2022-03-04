import { IToken } from "../models/token.model";

export const InitialTokens: IToken[] = [
  {
    type: "Dictionary",
    icon: "/bino.svg",
    count: 5,
  },
  { type: "Cluster", count: 4, icon: "/plane.svg" },
  { type: "Hint", count: 10, icon: "/clusterbomb.svg" },
];
