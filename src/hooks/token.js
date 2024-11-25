// import { useEffect, useState } from "react"
// import {URL_LOCAL} from '../api/const'

// export const useToken = (state) => {
//     const [token, setToken] = useState(state);

//     const delToken = () => {
//         console.log('delToken');
//         localStorage.setItem('bearer', '');
//         window.location.href = URL_LOCAL;
//         setToken('');
//     }

//     useEffect (() => {
        
//         if (window.location.pathname.includes('/auth')){
//             // console.log('useToken');
//             const token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');
//             setToken(token);
//         }

//         if (localStorage.getItem('bearer'))
//             setToken(localStorage.getItem('bearer'))
//     }, []);

//     useEffect(() => {
//         if (token){
//             // console.log('useToken [token]');
//             localStorage.setItem('bearer', token);
//         }
//     }, [token])

//     return [token, delToken];
// }

export const setToken = (token) => {
    // console.log('set token');
    localStorage.setItem('bearer', token);
}

export const getToken = () => {
    // console.log('get token');
    let token = '';

    if (window.location.pathname.includes('/auth')){
        token = new URLSearchParams(window.location.hash.substring(1)).get('access_token');
        setToken(token);
    }

    if (localStorage.getItem('bearer')){
        // console.log('get token',localStorage.getItem('bearer'));
        setToken(localStorage.getItem('bearer'))
        token = localStorage.getItem('bearer');
    }  

    return token;
}