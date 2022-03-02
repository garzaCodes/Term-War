import { createContext, useContext } from 'react';
import useFirebaseAuth from "./authentication";

interface IAuthContext {
  children: any;
}

const authUserContext = createContext({
  authUser: null,
  loading: true,
});

export default function AuthContext({ children }: IAuthContext) {
  const auth: any = useFirebaseAuth();

  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = ()=> useContext(authUserContext)
