import { ADD_QUESTION, 
		 INSERT_QUESTION, 
		 DELETE_QUESTION,
		 EDIT_QUESTION,
		 EDIT_TITLE,
		 EDIT_DESCRIPTION,
		 SET_TYPE } from '../actions/questionActions'
import { store, sagaMiddleware } from '../store'
//import questionSaga from '../sagas/questionSaga'

import generateId from '../lib/generateUniqueID'

const initialState = {
	pageID: 1,
	title: 'Название опроса...',
	description: 'Здравствуйте, потратьте, пожалуйста, несколько минут своего времени на заполнение следующей анкеты.',
	type: '-- выберите тип опроса --',
	img: '',
	finishMessage: '',
	finishDetail: '',
	lastChange: new Date(),
	questionList: []
}

const initialOptions = [
	{
		id: generateId(),
		value: 'Вариант 1'
	},
	{
		id: generateId(),
		value: 'Вариант 2'
	},
	{
		id: generateId(),
		value: 'Вариант 3'
	},
];

export default function userReducer(state = initialState, action) {
	switch (action.type) {
	case ADD_QUESTION: {
		let options = [];
		switch (action.question.type) {
			case 'oneAnswer':
			case 'severalAnswers':
				options = initialOptions;
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
		return Object.assign({}, state, {questionList: newList});
	}

	case INSERT_QUESTION: {
		let options = [];
		switch (action.question.type) {
			case 'oneAnswer':
			case 'severalAnswers':
				options = initialOptions;
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
		return Object.assign({}, state, {questionList: newList});
	}

	case DELETE_QUESTION: {
		const index = state['questionList'].findIndex(
			 element => (element.id === action.id)
		);
		const newList = [
			...state['questionList'].slice(0, index),
			...state['questionList'].slice(index + 1)
		];
		return Object.assign({}, state, {questionList: newList});
	}

	case EDIT_QUESTION: {
		const index = state['questionList'].findIndex(
			element => (element.id === action.id)
		);
		const editedQuestion = {
			id: index,
			type: state['questionList'][index].type,
			question: action.question
		}
		const newList = [
			...state['questionList'].slice(0, index),
			...[editedQuestion],
			...state['questionList'].slice(index + 1)
		];
	}

	case EDIT_TITLE: {
		return Object.assign({}, state, {title: action.title});
	}

	case EDIT_DESCRIPTION: {
		return Object.assign({}, state, {description: action.description});
	}

	case SET_TYPE: {
		return Object.assign({}, state, {type: action.surveyType});
	}

	default:
		return state;
	};
};

