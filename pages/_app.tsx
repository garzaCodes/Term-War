import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import AuthContext from "../firebase/authContext";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const FirebaseConfig = {
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      apiKey: process.env.FIREBASE_API_KEY,
      appId: process.env.FIREBASE_APP_ID,
    };
    console.log(FirebaseConfig)

    initializeApp(FirebaseConfig);
  });

  return (
    <AuthContext>
      <Component {...pageProps} />
    </AuthContext>
  );
}

export default MyApp;
