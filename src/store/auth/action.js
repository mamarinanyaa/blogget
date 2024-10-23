import { deleteToken } from "../tokenReducer";
import { URL } from "../../api/const";
import axios from "axios";

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS'; 
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR'; 
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => {
    return {
        type: AUTH_REQUEST,
        error: ''
    }
}

export const authRequestSuccess = (data) => {
    return {
        type: AUTH_REQUEST_SUCCESS,
        data,
    }

}

export const authRequestError = (error) => {
    return {
        type: AUTH_REQUEST_ERROR,
        data: {},
        error,
    }

}

export const authLogout = () => {
    return {
        type: AUTH_LOGOUT,
    }
}

export const authRequestAsync = () => (dispatch, getState) => {
    const token = getState().tokenReducer.token;

    if (!token) {
        console.log('!token');
        return
    };
    
    dispatch(authRequest())
    
    axios(`${URL}/api/v1/me`, {
        headers: {
        Authorization: `bearer ${token}`,
        },
    })
    .then(({data: {name, icon_img}}) => {
        const img = icon_img.replace(/\?.*$/,'');
        const data = {name, img};
        dispatch(authRequestSuccess(data))
    }).catch((err) => {
        console.log(err);
        dispatch(authRequestError(err.message))
        dispatch(deleteToken());
    });
}

