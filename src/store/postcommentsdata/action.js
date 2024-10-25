import axios from "axios"
import { URL } from "../../api/const";

export const POSTCOMMENTSDATA_REQUEST = 'POSTCOMMENTSDATA_REQUEST';
export const POSTCOMMENTSDATA_REQUEST_SUCCESS = 'POSTCOMMENTSDATA_REQUEST_SUCCESS';
export const POSTCOMMENTSDATA_REQUEST_ERROR = 'POSTCOMMENTSDATA_REQUEST_ERROR';
export const POSTCOMMENTSDATA_RESET = 'POSTCOMMENTSDATA_RESET';


export const postcommentsdataRequest = (data) => ({
    type: POSTCOMMENTSDATA_REQUEST,
    data
})

export const postcommentsdataRequestSuccess = (data) => ({
    type: POSTCOMMENTSDATA_REQUEST_SUCCESS,
    data
})

export const postcommentsdataRequestError = (error) => ({
    type: POSTCOMMENTSDATA_REQUEST_ERROR,
    error
})

export const postcommentsdataRequestAsync = (id) => (dispatch, getState) => {

    const token = getState().tokenReducer.token;

    if (!token) return;

    dispatch(postcommentsdataRequest({comments: [{body: 'Loading...'}]}))

    axios(`${URL}/comments/${id}`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(({data}) => {
        const dataPost = data[0].data.children[0].data;
        
        let dataComment = data[1].data.children.map((el) => {
            return {
                author: el.data.author,
                body: el.data.body
            }
        })

        dispatch(postcommentsdataRequestSuccess({title: dataPost.title, author: dataPost.author, markdown: dataPost.selftext, comments: dataComment}))

    }).catch(err => {
        dispatch(postcommentsdataRequestError(err.message));
    });
}


