import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FirebaseConfig = {
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  apiKey: process.env.FIREBASE_API_KEY,
  appId: process.env.FIREBASE_APP_ID,
};

export const FBApp = initializeApp(FirebaseConfig);
export const firestore = getFirestore(FBApp);
