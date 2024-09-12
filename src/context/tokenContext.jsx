import React from "react";
import { useToken } from "../hooks/useToken";

export const tokenContext = React.createContext('');

export const TokenContextProvider = ({children}) => {
    const [token, delToken] = useToken('');

    return (
        <tokenContext.Provider value={{token, delToken}}>
            {children}
        </tokenContext.Provider>
    )
}