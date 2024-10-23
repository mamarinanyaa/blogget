import { AUTH_REQUEST, AUTH_REQUEST_SUCCESS, AUTH_REQUEST_ERROR, AUTH_LOGOUT } from "./action"


const initialState = {
    data: {},
    error:'',
    loader:false
}

export const authReducer = (state=initialState, action) => {
    switch (action.type){
        case AUTH_REQUEST:
            return {
                ...state,
                loading: true
            };

        case AUTH_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };

        case AUTH_REQUEST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case AUTH_LOGOUT:
            return {
                ...state,
                data: {},
            };
        
        default:
            return state;
    }
}