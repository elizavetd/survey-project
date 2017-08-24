export const GET_USER_SURVEYS = 'GET_USER_SURVEYS'
export const RECEIVE_SURVEYS = 'RECEIVE_SURVEYS'

export const REQUEST_SURVEY_REMOVAL = 'REQUEST_SURVEY_REMOVAL'
export const REMOVE_SURVEY_SUCCESS = 'REMOVE_SURVEY_SUCCESS'
export const REMOVE_SURVEY_FAILURE = 'REMOVE_SURVEY_FAILURE'

export function getUserSurveys(id) {
	return {
		type: GET_USER_SURVEYS,
		id: id
	}
}

export function receiveSurveys(surveys) {
	return {
		type: RECEIVE_SURVEYS,
		surveys: surveys
	}
}

export function requestSurveyRemoval(id, userId) {
	return {
		type: REQUEST_SURVEY_REMOVAL,
		id: id,
		userId
	}
}

export function removeSurveySuccess() {
	return {
		type: REMOVE_SURVEY_SUCCESS
	}
}

export function removeSurveyFailure() {
	return {
		type: REMOVE_SURVEY_FAILURE
	}
}
