import { ADD_QUESTION, 
         INSERT_QUESTION, 
         DELETE_QUESTION,
         EDIT_QUESTION } from '../actions/questionActions'
import { store, sagaMiddleware } from '../store'
//import questionSaga from '../sagas/questionSaga'

const initialState = {
    pageID: 1,
    questionList: []
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
    case ADD_QUESTION: {
        let options = [];
        switch (action.question.type) {
            case 'oneAnswer':
            case 'severalAnswers':
                options = ['Вариант 1', 'Вариант 2', 'Вариант 3'];
                break;
            default:
                break;
        };
        
        const newQuestion = Object.assign(
            {}, 
            action.question, 
            { question: 'Напишите свой вопрос здесь...', options: options }
        );
        
        const newList = state['questionList'].concat([newQuestion]);
        return Object.assign({}, state, {pageID: 1, questionList: newList});
    }
    case INSERT_QUESTION: {
        let options = [];
        switch (action.question.type) {
            case 'oneAnswer':
            case 'severalAnswers':
                options = ['Вариант 1', 'Вариант 2', 'Вариант 3'];
                break;
            default:
                break;
        };
        
        const newQuestion = Object.assign(
            {}, 
            action.question, 
            { question: 'Напишите свой вопрос здесь...', options: options }
        );

        const index = state['questionList'].findIndex(
            element => (element.id === action.id)
        )
        const newList = [
            ...state['questionList'].slice(0, index),
            ...[newQuestion],
            ...state['questionList'].slice(index)
        ];
        return Object.assign({}, state, {pageID: 1, questionList: newList});
    }
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
    case EDIT_QUESTION: {
        const index = state['questionList'].findIndex(
            element => (element.id === action.id)
        );
        const editedQuestion = {
            id: index,
            type: state['questionList'][index].type,
            question: action.title,
            options: action.options
        }
        const newList = [
            ...state['questionList'].slice(0, index),
            ...[editedQuestion],
            ...state['questionList'].slice(index + 1)
        ];
    }
    default:
        return state;
    };
};

