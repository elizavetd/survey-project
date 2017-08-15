import { ADD_QUESTION } from '../actions/questionActions'
import { store, sagaMiddleware } from '../store'
//import questionSaga from '../sagas/questionSaga'

const initialState = {
    pageID: 1,
    questionList: []
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
    case ADD_QUESTION:
        const newList = state['questionList'].concat([action.payload]);
        return Object.assign({}, state, {pageID: 1, questionList: newList});
    default:
        return state;
    };
};

