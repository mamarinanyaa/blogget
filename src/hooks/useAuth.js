import { useEffect, useState } from "react"
import {URL} from '../api/const'

export const useAuth = (token) => {
    const [auth, setAuth] = useState({});

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
        }).then(response => response.json())
        .then(({name, icon_img: iconImg}) => {
            const img = iconImg.replace(/\?.*$/,'');
            setAuth({name, img})
        }).catch((err) => {
            console.log(err);
            resetAuth();
        });
        
    }, [token])

    return [auth, resetAuth];
}