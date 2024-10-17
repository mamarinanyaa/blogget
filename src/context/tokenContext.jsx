import React from "react";
import { useToken } from "../hooks/token";
import { useDispatch, useSelector } from 'react-redux';
import { updateToken } from "../store";

export const tokenContext = React.createContext('');

export const TokenContextProvider = ({children}) => {
    // const [token, delToken] = useToken('');
    const token = useSelector(state => state.token);

    return (
        <tokenContext.Provider value={{token}}>
            {children}
        </tokenContext.Provider>
    )
}