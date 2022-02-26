import { IToken } from "../models/token.model";

const TokenService: any = {};

TokenService.getTokens = function (): IToken[] {
  return [
    {
      type: "Dictionary",
      icon: "/bino.svg",
      count: 5,
    },
    { type: "Cluster", count: 4, icon: "/plane.svg" },
    { type: "Hint", count: 10, icon: "/clusterbomb.svg" },
  ];
};

TokenService.useDefinition = function (word: string) {
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  return fetch(url + word, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((res) => res[0].meanings[0].definitions[0].definition);
};

TokenService.useClusterBomb = function (word: string, hint: any) {
  const clusterHits = 3;

  for (let i = 0; i < clusterHits; i++) {
    setTimeout(() => {
      hint();
    }, 1200);
  }
};

TokenService.useHint = function (word: string, hint: any) {
  hint();
};

export default TokenService;
