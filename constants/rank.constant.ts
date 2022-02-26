import { IRank } from "../models/rank.model";

export const RANKS: IRank[] = [
  {
    title: "Recruit",
    experienceNeeded: 0,
  },
  {
    title: "Private",
    image: "/rank-1.svg",
    experienceNeeded: 100,
  },
  {
    title: "PFC",
    image: "/rank-2.svg",
    experienceNeeded: 1500,
  },
  {
    title: "SPC",
    image: "/rank-3.svg",
    experienceNeeded: 5000,
  },
  {
    title: "SGT",
    image: "/rank-4.svg",
    experienceNeeded: 15000,
  },
  {
    title: "SSG",
    image: "/rank-5.svg",
    experienceNeeded: 35000,
  },
];
