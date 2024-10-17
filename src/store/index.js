import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { commentReducer } from "./commentReducer";
import { tokenReducer, tokenMiddleware } from "./tokenReducer";

const rootReducer = combineReducers({
    commentReducer,
    tokenReducer
});
  
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(tokenMiddleware)));