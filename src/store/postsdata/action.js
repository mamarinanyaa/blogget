import { URL } from "../../api/const";
import axios from "axios";

export const POSTSDATA_REQUEST = 'POSTSDATA_REQUEST';
export const POSTSDATA_REQUEST_SUCCESS = 'POSTSDATA_REQUEST_SUCCESS';
export const POSTSDATA_REQUEST_ERROR = 'POSTSDATA_REQUEST_ERROR';
export const POSTSDATA_RESET = 'POSTSDATA_RESET';
export const POSTSDATA_REQUEST_SUCCESS_AFTER = 'POSTSDATA_REQUEST_SUCCESS_AFTER';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const postsdataRequest = () => ({
    type: POSTSDATA_REQUEST,
    error: ''
})

export const postsdataRequestSuccessAfter = (data) => ({
    type: POSTSDATA_REQUEST_SUCCESS_AFTER,
    data: data.posts,
    after: data.after,
})

export const postsdataRequestSuccess = (data) => ({
    type: POSTSDATA_REQUEST_SUCCESS,
    data: data.posts,
    after: data.after,
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

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
})

export const postsdataRequestAsync = (newPage) => (dispatch, getState) => {
    
    let page = getState().postsdataReducer.page;

    if (newPage) {
        page = newPage;
        dispatch(changePage(page))
    }
    
    const token = getState().tokenReducer.token;
    const after = getState().postsdataReducer.after;
    const loading = getState().postsdataReducer.loading;
    const isLast = getState().postsdataReducer.isLast;
    

    // console.log(loading);
    if (!token || isLast) {
        console.log('not token');
        return;
    };
    
    dispatch(postsdataRequest());

    axios(`${URL}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(({data}) => {

        let posts = []
        data.data.children.forEach(element => {
            posts = [...posts, element.data]
        });
        // console.log('req success');
        if (after && !loading){
            // console.log('after');
            dispatch(postsdataRequestSuccessAfter({posts, after: data.data.after}))
        }
        else if (!after && !loading){
            // console.log('not after');
            dispatch(postsdataRequestSuccess({posts, after: data.data.after}))
        }
            

    }).catch(err => {
        dispatch(postsdataRequestError(err.message));
    });
}