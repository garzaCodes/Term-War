import { RANKS } from "../constants/rank.constant";

const GameService: any = {};

GameService.getHint = function (
  word: string,
  usedHints: string[],
  keySelection: string[]
): string {
  const usedChars: string[] = [...new Set([...usedHints, ...keySelection])];
  const wordArr: string[] = [...new Set(word)].sort();
  let random: number;
  let filteredArr;

  if (usedChars) {
    filteredArr = wordArr.filter((char) => !usedChars.includes(char));
  } else {
    filteredArr = wordArr;
  }

  random = Math.floor(Math.random() * filteredArr.length);
  return filteredArr[random];
};

GameService.fireMissile = function (
  sound: boolean,
  fireMissile: HTMLAudioElement
) {
  if (!sound) return;

  fireMissile.volume = 0.5;
  fireMissile.play();
};

GameService.takeHit = function (sound: boolean, impact: HTMLAudioElement) {
  if (!sound) return;

  impact.volume = 0.4;
  impact.play();
};

GameService.playGameMusic = function (
  sound: boolean,
  audioPlayerRef: any,
  defeatMusic: HTMLAudioElement
) {
  if (!sound) {
    audioPlayerRef.current.pause();
    defeatMusic.pause();
    return;
  }

  audioPlayerRef.current.volume = 0.3;
  defeatMusic.pause();
  defeatMusic.currentTime = 0;
  audioPlayerRef.current.play();
};

GameService.playVictoryMusic = function (
  sound: boolean,
  audioPlayerRef: any,
  victoryMusic: HTMLAudioElement
) {
  if (!sound) return;

  audioPlayerRef.current.pause();
  victoryMusic.volume = 0.4;
  victoryMusic.play();
};

GameService.playDefeatMusic = function (
  sound: boolean,
  audioPlayerRef: any,
  defeatMusic: HTMLAudioElement
) {
  if (!sound) return;

  audioPlayerRef.current.pause();
  defeatMusic.volume = 0.3;
  defeatMusic.play();
};

GameService.getRank = function (experiencePoints: number) {
  const rank = GameService.setRank(experiencePoints);
  return rank;
};

GameService.setRank = function (experiencePoints: number) {
  const roundUpExperience = Math.round(experiencePoints / 100) * 100;
  const rank = RANKS.filter(
    (rank) => rank.experienceNeeded <= roundUpExperience
  );

  return rank[rank.length - 1];
};

export default GameService;
