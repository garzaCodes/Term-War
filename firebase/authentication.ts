import { FirebaseApp } from "./client.app";
import { useEffect, useState } from "react";
import { AuthUser } from "../models/authUser.model";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const formatAuthUser = (user: any) => ({
  uid: user.uid,
  email: user.email,
});

const googleProvider = new GoogleAuthProvider();

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  let auth: any;

  const authStateChanged = async (authState: any) => {
    console.log("In Auth Changed", authState);

    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  useEffect(() => {
    auth = getAuth(FirebaseApp);

    const unsubscribe = auth.onAuthStateChanged(authStateChanged);

    return () => unsubscribe();
  }, []);

  function signInWithEmail(email: string, password: string): any {
    return signInWithEmailAndPassword(auth, email, password).catch(
      (error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("Google Auth Failed", {
          code: errorCode,
          msg: errorMessage,
          email: email,
        });
      }
    );
  }

  function signUpWithEmail(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error("Google Auth Failed", {
          code: errorCode,
          msg: errorMessage,
          email: email,
        });
      }
    );
  }

  function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error("Google Auth Failed", {
        code: errorCode,
        msg: errorMessage,
        email: email,
        cred: credential,
      });
    });
  }

  return {
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    authUser,
    loading,
  };
}
