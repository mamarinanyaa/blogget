import { useEffect, useState } from "react"
import {URL_LOCAL} from '../api/const'

export const useToken = (state) => {
    const [token, setToken] = useState(state);

    const delToken = () => {
        console.log('delToken');
        localStorage.setItem('bearer', '');
        window.location.href = URL_LOCAL;
        setToken('');
    }

    useEffect (() => {
        
        if (window.location.pathname.includes('/auth')){
            // console.log('useToken');
            const token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');
            setToken(token);
        }

        if (localStorage.getItem('bearer'))
            setToken(localStorage.getItem('bearer'))
    }, []);

    useEffect(() => {
        if (token){
            // console.log('useToken [token]');
            localStorage.setItem('bearer', token);
        }
    }, [token])

    return [token, delToken];
}