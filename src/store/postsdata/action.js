import { URL } from "../../api/const";
import axios from "axios";

export const POSTSDATA_REQUEST = 'POSTSDATA_REQUEST';
export const POSTSDATA_REQUEST_SUCCESS = 'POSTSDATA_REQUEST_SUCCESS';
export const POSTSDATA_REQUEST_ERROR = 'POSTSDATA_REQUEST_ERROR';
export const POSTSDATA_RESET = 'POSTSDATA_RESET';


export const postsdataRequest = () => ({
    type: POSTSDATA_REQUEST,
    error: ''
})

export const postsdataRequestSuccess = (data) => ({
    type: POSTSDATA_REQUEST_SUCCESS,
    data,
})

export const postsdataRequestError = (error) => ({
    type: POSTSDATA_REQUEST_ERROR,
    data: [],
    error
})

export const postsdataReset = () => ({
    type: POSTSDATA_RESET,
    data: []
})

export const postsdataRequestAsync = () => (dispatch, getState) => {
    const token = getState().tokenReducer.token;

    if (!token) {
        console.log('not token');
        dispatch(postsdataReset());
        return;
    };
    
    dispatch(postsdataRequest());
    dispatch(postsdataReset());

    axios(`${URL}/best`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(({data}) => {

        let resdata = []
        data.data.children.forEach(element => {
            resdata = [...resdata, element.data]
        });
        dispatch(postsdataRequestSuccess(resdata))

    }).catch(err => {
        dispatch(postsdataRequestError(err.message));
    });
}