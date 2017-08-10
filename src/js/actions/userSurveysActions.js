export const GET_USER_SURVEYS = 'GET_USER_SURVEYS'
export const RECEIVE_SURVEYS = 'RECEIVE_SURVEYS'

export function getUserSurveys() {
  return {
    type: GET_USER_SURVEYS
  }
}

export function receiveSurveys(surveys) {
  return {
    type: RECEIVE_SURVEYS,
    surveys: surveys
  }
}