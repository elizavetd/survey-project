export const GET_TEMPLATES = 'GET_TEMPLATES'
export const RECEIVE_TEMPLATES = 'RECEIVE_TEMPLATES'

export function getTemplates() {
  return {
    type: GET_TEMPLATES
  }
}

export function receiveTemplates(surveys) {
  return {
    type: RECEIVE_TEMPLATES,
    surveys: surveys
  }
}
