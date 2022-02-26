import { IToken } from "../models/token.model";

const TokenService: any = {};

TokenService.getTokens = function (): IToken[] {
  return [
    {
      type: "Dictionary",
      count: 5,
      icon: "/bino.svg",
    },
    { type: "Cluster", count: 4, icon: "/plane.svg" },
    { type: "Hint", count: 10, icon: "/clusterbomb.svg" },
  ];
};

TokenService.getDefinition = function (word: string) {
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  return fetch(url + word, {
    method: "GET",
  }).then((response) => response.json());
};

export default TokenService;
