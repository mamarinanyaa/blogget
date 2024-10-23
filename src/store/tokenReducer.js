import { setToken } from "../hooks/token.js";

const initialState = {
    token: '',
}

export const tokenMiddleware = (store) => (next) => (action) => {
    // switch (action.type) {

    //     case 'UPDATE_TOKEN':
    //         setToken(action.token);
    //         break;

    //     case 'DELETE_TOKEN':
    //         setToken('');
    //         break;
    // }
    // console.log('middleware');
    if (action.type == 'UPDATE_TOKEN')
        setToken(action.token);
    if (action.type == 'DELETE_TOKEN')
        setToken('');
    next(action); // доходит до reducer
}

export const updateToken = (value) => {
    return {
        type: 'UPDATE_TOKEN',
        token: value
    }
}

export const deleteToken = () => {
    console.log('del tok');
    return {
        type: 'DELETE_TOKEN',
        token: ''
    }
}

export const tokenReducer = (state = initialState , action) => {
    switch (action.type) {

        case 'UPDATE_TOKEN':
            // setToken(action.token)
            return {
                ...state,
                token: action.token
            };
        case 'DELETE_TOKEN':
            // setToken('')
            return {
                ...state,
                token: ''
            };

        default:
            return state;
    }
};