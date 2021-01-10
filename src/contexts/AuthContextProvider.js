import React, { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from '../firebase';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [user, loading, error] = useAuthState(firebase.auth());


  return (
    <AuthContext.Provider
      value={{
				user,
				loading,
				error,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;