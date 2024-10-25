import { POSTCOMMENTSDATA_REQUEST, POSTCOMMENTSDATA_REQUEST_SUCCESS, POSTCOMMENTSDATA_REQUEST_ERROR, POSTCOMMENTSDATA_RESET } from "./action";

const initialState = {
    data: {
        title: '',
        author: '',
        markdown: '',
        comments: [{body: 'Loading...'}]
    },
    error: ''
}

export const postcommentsdataReducer = (state=initialState, action) => {
    switch (action.type) {

        case POSTCOMMENTSDATA_REQUEST:
            return {
                ...state,
                data: action.data
            }

        case POSTCOMMENTSDATA_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.data
            }

        case POSTCOMMENTSDATA_REQUEST_ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}