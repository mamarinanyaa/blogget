export const COMMENTSDATA_REQUEST = 'COMMENTSDATA_REQUEST';
export const COMMENTSDATA_REQUEST_SUCCESS = 'COMMENTSDATA_REQUEST_SUCCESS';
export const COMMENTSDATA_REQUEST_ERROR = 'COMMENTSDATA_REQUEST_ERROR';


export const commentsdataRequest = () => ({
    type: COMMENTSDATA_REQUEST,
})

export const commentsdataRequestSuccess = (data) => ({
    type: COMMENTSDATA_REQUEST_SUCCESS,
    data
})

export const commentsdataRequestError = (error) => ({
    type: COMMENTSDATA_REQUEST_ERROR,
    error
})

