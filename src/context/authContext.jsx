import React from "react";
import { useAuth } from "../hooks/useAuth";

export const authContext = React.createContext('');

export const AuthContextProvider = ({children}) => {
    const [auth, resetAuth] = useAuth();

    return (
        <authContext.Provider value={{auth, resetAuth}}>
            {children}
        </authContext.Provider>
    );
}