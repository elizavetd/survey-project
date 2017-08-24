export const GET_TEMPLATES = 'GET_TEMPLATES'
export const RECEIVE_TEMPLATES = 'RECEIVE_TEMPLATES'

export const REQUEST_TEMPLATE_REMOVAL = 'REQUEST_TEMPLATE_REMOVAL'
export const REMOVE_TEMPLATE_SUCCESS = 'REMOVE_TEMPLATE_SUCCESS'
export const REMOVE_TEMPLATE_FAILURE = 'REMOVE_TEMPLATE_FAILURE'

export function getTemplates() {
	return {
		type: GET_TEMPLATES
	}
}

export function receiveTemplates(templates) {
	return {
		type: RECEIVE_TEMPLATES,
		templates: templates
	}
}

export function requestTemplateRemoval(id) {
	return {
		type: REQUEST_TEMPLATE_REMOVAL,
		id: id
	}
}

export function removeTemplateSuccess() {
	return {
		type: REMOVE_TEMPLATE_SUCCESS
	}
}

export function removeTemplateFailure() {
	return {
		type: REMOVE_TEMPLATE_FAILURE
	}
}
