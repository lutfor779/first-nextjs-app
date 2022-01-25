import React, { createContext } from 'react';

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const data = 'auth testing';

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
