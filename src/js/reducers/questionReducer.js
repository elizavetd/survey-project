import { ADD_QUESTION, 
         INSERT_QUESTION, 
         DELETE_QUESTION } from '../actions/questionActions'
import { store, sagaMiddleware } from '../store'
//import questionSaga from '../sagas/questionSaga'

const initialState = {
    pageID: 1,
    questionList: []
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
    case ADD_QUESTION: {
        const newList = state['questionList'].concat([action.payload]);
        return Object.assign({}, state, {pageID: 1, questionList: newList});
    }
    case INSERT_QUESTION:
        // const index = state['questionList'].findIndex(
        //     element => (element.id === action.id)
        // )
        // const newList = state['questionList'].concat([action.payload]);
            return state;

    case DELETE_QUESTION: {
        const index = state['questionList'].findIndex(
             element => (element.id === action.id)
        );
        const newList = [
            ...state['questionList'].slice(0, index),
            ...state['questionList'].slice(index + 1)
        ];
        return Object.assign({}, state, {pageID: 1, questionList: newList});
    }
    default:
        return state;
    };
};

