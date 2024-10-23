import { useState, useEffect } from "react";
import { URL } from "../api/const";
import { useDispatch, useSelector } from "react-redux";
import { postsdataRequest, postsdataRequestAsync, postsdataRequestError, postsdataRequestSuccess, postsdataReset } from "../store/postsdata/action.js"

export const usePostsData = () => {

    const token = useSelector(state => state.tokenReducer.token)
    // const [postsData, setPostsData] = useState([])
    const postsData = useSelector(state => state.postsdataReducer.data)
    const dispatch = useDispatch();

    
    useEffect (() => {
        dispatch(postsdataRequestAsync());
    }, [token])

    return [postsData];
}

