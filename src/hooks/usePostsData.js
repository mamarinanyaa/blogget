import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsdataRequestAsync } from "../store/postsdata/action.js"

export const usePostsData = () => {

    const token = useSelector(state => state.tokenReducer.token);
    const postsData = useSelector(state => state.postsdataReducer.data)
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(postsdataRequestAsync());
    }, [token])

    return [postsData];
}

