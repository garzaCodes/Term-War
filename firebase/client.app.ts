import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const FirebaseConfig = {
  messagingSenderId: "680228173007",
  storageBucket: "flamethrowerpickle.appspot.com",
  authDomain: "flamethrowerpickle.firebaseapp.com",
  projectId: "flamethrowerpickle",
  apiKey: "AIzaSyB4qjz9OfyVYpY6NwwQYl77ZBGKcKaSGu8",
  appId: "1:680228173007:web:9a4b56e660c1af2075f3ba",
};

export const FirebaseApp = initializeApp(FirebaseConfig);
export const DB = getFirestore(FirebaseApp);
