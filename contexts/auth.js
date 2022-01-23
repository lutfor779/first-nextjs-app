import React, { createContext } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const data = "auth testing";

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;