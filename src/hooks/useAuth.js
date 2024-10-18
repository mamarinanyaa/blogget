import { useContext, useEffect, useState } from "react"
import {URL} from '../api/const'
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../store/tokenReducer.js";

export const useAuth = () => {
    const [auth, setAuth] = useState({});
    // const {token, delToken} = useContext(tokenContext);
    const token = useSelector(state => state.tokenReducer.token)
    const dispatch = useDispatch()

    const resetAuth = () => {
        setAuth({})
        dispatch(deleteToken())
    }

    useEffect(() => {

        if (!token) {
            console.log('!token');
            return
        };
        // console.log('useAuth');
        
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
        });
        
    }, [token])

    return [auth, resetAuth];
}




