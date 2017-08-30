export const GET_SURVEY_QUESTIONS = 'GET_SURVEY_QUESTIONS'
export const RECEIVE_SURVEY_QUESTIONS = 'RECEIVE_SURVEY_QUESTIONS'

export const CREATE_SURVEY_FROM_TEMPLATE = 'CREATE_SURVEY_FROM_TEMPLATE'

export const LOAD_EXISTING_SURVEY = 'LOAD_EXISTING_SURVEY'

export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_ANSWER_SUCCESS = 'ADD_ANSWER_SUCCESS'
export const ADD_ANSWER_FAILURE = 'ADD_ANSWER_FAILURE'

export const ADD_QUESTION = 'ADD_QUESTION'
export const INSERT_QUESTION = 'INSERT_QUESTION'
export const DELETE_QUESTION = 'DELETE_QUESTION'
export const EDIT_QUESTION = 'EDIT_QUESTION'

export const EDIT_TITLE = 'EDIT_TITLE'
export const EDIT_DESCRIPTION = 'EDIT_DESCRIPTION'
export const SET_TYPE = 'SET_TYPE'

export const EDIT_MESSAGE = 'EDIT_MESSAGE'
export const EDIT_DETAIL = 'EDIT_DETAIL'

export const RESET_SURVEY = 'RESET_SURVEY'

export const REQUEST_SURVEY_SAVING = 'REQUEST_SURVEY_SAVING'
export const SURVEY_SAVING_SUCCESS = 'SURVEY_SAVING_SUCCESS'
export const SURVEY_SAVING_FAILURE = 'SURVEY_SAVING_FAILURE'

export const REQUEST_TEMPLATE_SAVING = 'REQUEST_TEMPLATE_SAVING'
export const TEMPLATE_SAVING_SUCCESS = 'TEMPLATE_SAVING_SUCCESS'
export const TEMPLATE_SAVING_FAILURE = 'TEMPLATE_SAVING_FAILURE'

export function getSurveyQuestions() {
	return {
		type: GET_SURVEY_QUESTIONS	
	}
}

export function receiveSurveyQuestions(questions) {
	return {
		type: RECEIVE_SURVEY_QUESTIONS,
		payload: questions
	}
}

export function createSurveyFromTemplate(template) {
	return {
		type: CREATE_SURVEY_FROM_TEMPLATE,
		template: template
	}
}

export function loadExistingSurvey(survey) {
	return {
		type: LOAD_EXISTING_SURVEY,
		survey: survey
	}
}

export function addAnswer(surveyId, answer) {
	return {
		type: ADD_ANSWER,
		surveyId: surveyId,
		answer: answer
	}
}

export function addAnswerSuccess() {
	return {
		type: ADD_ANSWER_SUCCESS
	}
}

export function addAnswerFailure() {
	return {
		type: ADD_ANSWER_FAILURE
	}
}

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question: question
	}
}

export function insertQuestion(id, question) {
	return {
		type: INSERT_QUESTION,
		id: id,
		question: question
	}
}

export function deleteQuestion(id) {
	return {
		type: DELETE_QUESTION,
		id: id
	}
}

export function editQuestion(version) {
	return {
		type: EDIT_QUESTION,
		id: version.id,
		question: version.question,
		options: version.options
	}
}

export function editTitle(title) {
	return {
		type: EDIT_TITLE,
		title: title
	}
}

export function editDescription(description) {
	return {
		type: EDIT_DESCRIPTION,
		description: description
	}
}

export function setType (surveyType) {
	return {
		type: SET_TYPE,
		surveyType: surveyType
	}
}

export function editMessage (message) {
	return {
		type: EDIT_MESSAGE,
		message: message
	}
}

export function editDetail (detail) {
	return {
		type: EDIT_DETAIL,
		detail: detail
	}
}

export function resetSurvey() {
	return {
		type: RESET_SURVEY
	}
}

export function requestSurveySaving(survey) {
	return {
		type: REQUEST_SURVEY_SAVING,
		survey: survey
	}
}

export function surveySavingSuccess() {
	return {
		type: SURVEY_SAVING_SUCCESS
	}
}

export function surveySavingFailure() {
	return {
		type: SURVEY_SAVING_FAILURE
	}
}

export function requestTemplateSaving(template) {
	return {
		type: REQUEST_TEMPLATE_SAVING,
		template: template
	}
}

export function templateSavingSuccess() {
	return {
		type: TEMPLATE_SAVING_SUCCESS
	}
}

export function templateSavingFailure() {
	return {
		type: TEMPLATE_SAVING_FAILURE
	}
}
