import { createStore } from "redux";

const initialState = {
    comment: 'Hello Redux',
}

export const updateComment = (value) => {
    return {
        type: 'UPDATE_COMMENT',
        comment: value
    }
}

const rootReducer = (state = initialState , action) => {
    switch (action.type) {
        
        case 'UPDATE_COMMENT':
            return {
                ...state,
                comment: action.comment
            };

        default:
            return state;
    }
};
  
export const store = createStore(rootReducer);