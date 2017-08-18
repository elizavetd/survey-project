import { ADD_QUESTION, 
		 INSERT_QUESTION, 
		 DELETE_QUESTION,
		 EDIT_QUESTION,
		 EDIT_TITLE,
		 EDIT_DESCRIPTION,
		 SET_TYPE,
		 EDIT_MESSAGE,
		 EDIT_DETAIL,
		 RESET_SURVEY } from '../actions/questionActions'
import { store, sagaMiddleware } from '../store'
import { generateSurveyID } from '../lib/generateUniqueID'

import generateId from '../lib/generateUniqueID'

const initialState = {
	id: generateSurveyID(),
	//pageID: 1,
	title: 'Название опроса...',
	description: 'Здравствуйте, потратьте, пожалуйста, несколько минут своего времени на заполнение следующей анкеты.',
	type: '-- выберите тип опроса --',
	iconType: 'fa fa-question',
	imageSrc: '',
	finishMessage: 'Благодарим за прохождение опроса!',
	finishDetail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
	lastChangeDate: new Date(),
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
	}
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

	case EDIT_MESSAGE: {
		return Object.assign({}, state, {finishMessage: action.message});
	}

	case EDIT_DETAIL: {
		return Object.assign({}, state, {finishDetail: action.detail});
	}
	
	case RESET_SURVEY: {
		return initialState;
	}

	default:
		return state;
	};
};

