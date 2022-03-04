import { Account } from "../models/account.model";
import {
  QueryDocumentSnapshot,
  collection,
  getDocs,
  query,
  where,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { DB } from "../firebase/client.app";
import { InitialTokens } from "../constants/initial-tokens.constant";

const playersCollection = collection(DB, "Player");
const AccountService: any = {};

AccountService.account = null;

AccountService.getAccount = async function (uid: string) {
  const playerQuery = query(playersCollection, where("uid", "==", uid));
  const querySnapshot = await getDocs(playerQuery);

  const player: QueryDocumentSnapshot[] = [];

  querySnapshot.forEach((snapshot: any) => {
    player.push(snapshot.data());
  });

  window.localStorage.setItem("currentPlayer", JSON.stringify(player[0]));

  return player[0];
};

AccountService.createAccount = async function (uid: string, email: string) {
  const player = doc(DB, `Player/` + uid);
  const username = email.split("@")[0];
  const userAccount: Account = {
    created: serverTimestamp(),
    tokens: InitialTokens,
    currentLevel: 1,
    totalScore: 0,
    username,
    xp: 0,
    email,
    uid,
  };

  try {
    await setDoc(player, userAccount);
  } catch (error) {}
};

AccountService.updateAccount = async function (uid: string, account: any) {
  const player = doc(DB, `Player/` + uid);

  window.localStorage.setItem("currentPlayer", JSON.stringify(account));

  try {
    await updateDoc(player, account);
  } catch (error) {}
};

export default AccountService;
