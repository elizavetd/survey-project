export const GET_SURVEY_QUESTIONS = 'GET_SURVEY_QUESTIONS'
export const RECEIVE_SURVEY_QUESTIONS = 'RECEIVE_SURVEY_QUESTIONS'

export const ADD_QUESTION = 'ADD_QUESTION'
export const INSERT_QUESTION = 'INSERT_QUESTION'
export const DELETE_QUESTION = 'DELETE_QUESTION'

export const EDIT_QUESTION = 'EDIT_QUESTION'
//export const SUBMIT_EDITING = 'SUBMIT_EDITING'

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
    question: version.question
  }
}

// export function submitEditing(id) {
//   return {
//     type: SUBMIT_EDITING,
//     id: id
//   }
// }
