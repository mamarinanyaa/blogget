import { useContext, useEffect, useState } from "react"
import {URL} from '../api/const'
import { tokenContext } from "../context/tokenContext";

export const useAuth = () => {
    const [auth, setAuth] = useState({});
    const {token, delToken} = useContext(tokenContext);

    const resetAuth = () => {
        setAuth({})
    }

    useEffect(() => {

        if (!token) return;
        console.log('useAuth');
        
        fetch(`${URL}/api/v1/me`, {
            headers: {
            Authorization: `bearer ${token}`,
            },
        }).then(response => {
            if (response.status === 401) {
                throw new Error(response.status)
            }
            return response.json()
        })
        .then(({name, icon_img}) => {
            const img = icon_img.replace(/\?.*$/,'');
            setAuth({name, img})
            // console.log({name, img});
        }).catch((err) => {
            console.log(err);
            resetAuth();
            delToken();
        });
        
    }, [token])

    return [auth, resetAuth];
}




