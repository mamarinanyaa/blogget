import { POSTSDATA_REQUEST, POSTSDATA_REQUEST_SUCCESS, POSTSDATA_REQUEST_ERROR, POSTSDATA_RESET, POSTSDATA_REQUEST_SUCCESS_AFTER, CHANGE_PAGE } from "./action.js";

const initialState = {
    data: [],
    error: '',
    loading: false,
    after: false,
    isLast: false,
    page: ''
}

export const postsdataReducer = (state = initialState, action) => {
    switch (action.type) {

        case POSTSDATA_REQUEST:
            return {
                ...state,
                loading: false
            }

        case POSTSDATA_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: true,
                after: action.after,
                error: '',
                isLast: !action.after,
            }

        case POSTSDATA_REQUEST_SUCCESS_AFTER:
            return {
                ...state,
                data: [...state.data, ...action.data],
                loading: true,
                after: action.after,
                error: '',
                isLast: !action.after,
            }

        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page,
                after: '',
                isLast: false
            }

        case POSTSDATA_RESET:
            return {
                ...state,
                data: action.data,
                loading: false
            }

        case POSTSDATA_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }

        default:
            return state;
    }
}