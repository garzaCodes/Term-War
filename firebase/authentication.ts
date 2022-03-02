import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { FirebaseApp } from './client.app';

//
// const googleProvider = new GoogleAuthProvider();
//
// const AuthSvc: any = {};
//
// AuthSvc.currenUser = null;
//
// AuthSvc.userToken = null;
//
// AuthSvc.signInWithGoogle = function (email: string, password: string) {
//   const auth = getAuth();
//
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       AuthSvc.currenUser = userCredential.user;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//
//       console.error("Google Auth Failed", {
//         code: errorCode,
//         msg: errorMessage,
//         email: email,
//       });
//     });
// };
//
// AuthSvc.signUnWithEmail = function (email: string, password: string) {
//   const auth = getAuth();
//
//   return createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       AuthSvc.currenUser = userCredential.user;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//
//       console.error("Google Auth Failed", {
//         code: errorCode,
//         msg: errorMessage,
//         email: email,
//       });
//     });
// };
//
// AuthSvc.signInWithGoogle = function () {
//   const auth = getAuth();
//
//   signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       const credential: any = GoogleAuthProvider.credentialFromResult(result);
//       AuthSvc.userToken = credential.accessToken;
//       AuthSvc.currenUser = result.user;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.email;
//       const credential = GoogleAuthProvider.credentialFromError(error);
//
//       console.error("Google Auth Failed", {
//         code: errorCode,
//         msg: errorMessage,
//         email: email,
//         cred: credential,
//       });
//     });
// };
//
// export default AuthSvc;
//

import { useEffect, useState } from "react";
import { AuthUser } from "../models/authUser.model";
import { FirebaseAuth } from '@firebase/auth-types';

const formatAuthUser = (user: any) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const authStateChanged = async (authState: any) => {
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
    const auth = getAuth(FirebaseApp);
    return onAuthStateChanged(auth, authStateChanged);
  });

  return {
    authUser,
    loading,
  };
}
