import { POSTSDATA_REQUEST, POSTSDATA_REQUEST_SUCCESS, POSTSDATA_REQUEST_ERROR, POSTSDATA_RESET } from "./action.js";

const initialState = {
    data: [],
    error: '',
}

export const postsdataReducer = (state = initialState, action) => {
    switch (action.type) {

        case POSTSDATA_REQUEST:
            return {
                ...state,
            }

        case POSTSDATA_REQUEST_SUCCESS:
        case POSTSDATA_RESET:
            return {
                ...state,
                data: action.data
            }

        case POSTSDATA_REQUEST_ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}