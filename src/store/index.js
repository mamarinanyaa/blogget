import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { commentReducer } from "./commentReducer.js";
import { tokenReducer, tokenMiddleware } from "./tokenReducer.js";
import { authReducer } from "./auth/authReducer.js";
import {postsdataReducer} from "./postsdata/postsdataReducer.js";
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    commentReducer,
    tokenReducer,
    authReducer,
    postsdataReducer
});
  
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));