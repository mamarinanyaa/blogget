import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../store/tokenReducer.js";
import { authLogout, authRequestAsync } from "../store/auth/action.js";
import { postsdataRequestAsync } from "../store/postsdata/action.js";


export const useAuth = () => {
    // const [auth, setAuth] = useState({});
    // const {token, delToken} = useContext(tokenContext);
    const auth = useSelector(state=>state.authReducer.data)
    const token = useSelector(state => state.tokenReducer.token)
    const loading = useSelector(state=>state.authReducer.loading)
    const dispatch = useDispatch()

    const resetAuth = () => {
        dispatch(authLogout())
        dispatch(deleteToken())
    }

    useEffect(() => {
        dispatch(authRequestAsync()); //async action creator
        // dispatch(postsdataRequestAsync());
    }, [token])

    return [auth, loading, resetAuth];
}




