import { POSTSDATA_REQUEST, POSTSDATA_REQUEST_SUCCESS, POSTSDATA_REQUEST_ERROR, POSTSDATA_RESET } from "./action.js";

const initialState = {
    data: [],
    error: '',
    status: ''
}

export const postsdataReducer = (state = initialState, action) => {
    switch (action.type) {

        case POSTSDATA_REQUEST:
            return {
                ...state,
                status: 'loading'
            }

        case POSTSDATA_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.data,
                status: 'loaded'
            }

        case POSTSDATA_RESET:
            return {
                ...state,
                data: action.data
            }

        case POSTSDATA_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
                status: 'error'
            }

        default:
            return state;
    }
}