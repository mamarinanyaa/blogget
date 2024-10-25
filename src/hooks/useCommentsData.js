import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postcommentsdataRequestAsync } from "../store/postcommentsdata/action.js";

export const useCommentsData = (id) => {
    const token = useSelector(state=>state.tokenReducer.token);
    const postCommentsData = useSelector(state=>state.postcommentsdataReducer.data);

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(postcommentsdataRequestAsync(id));
    }, [token])

    return [postCommentsData];
}

