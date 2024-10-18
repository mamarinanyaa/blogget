import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { commentReducer } from "./commentReducer.js";
import { tokenReducer, tokenMiddleware } from "./tokenReducer.js";

const rootReducer = combineReducers({
    commentReducer,
    tokenReducer
});
  
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(tokenMiddleware)));
  
// export const store = createStore(rootReducer, composeWithDevTools());