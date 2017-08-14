import _users from './users'
import _surveys from './surveys'
import _templates from './templates'
import _jobs from './jobs'
import _questions from './surveyQuestions'

const TIMEOUT = 100;

export const api = {
  getCurrentUser() {
    return new Promise( resolve => {
      setTimeout(() => {
        for (let i = 0; i < _users.length; i++) {
          if (_users[i].username === 'admin') {
            resolve(_users[i]);
          }
        }
      }, TIMEOUT)
    })
  },
  
  getUserList() {
    return new Promise( resolve => {
      setTimeout(() => resolve({userList: _users}), TIMEOUT)
    })
  },

  getUserSurveys() {
    return new Promise( resolve => {
      setTimeout(() => resolve(_surveys), TIMEOUT)
    })
  },

  getTemplates() {
    return new Promise( resolve => {
      setTimeout(() => resolve(_templates), TIMEOUT)
    })
  },

  getQuestionList() {
    return new Promise( resolve => {
      setTimeout(() => resolve(_questions[0].questionList), TIMEOUT)
    })
  },

  addQuestion(question) {
    return new Promise( resolve => setTimeout(() => {
      resolve(Object.assign(_questions[0].questionList, question ))
    }, TIMEOUT));
  },

  getJobs() {
    return new Promise( resolve => {
      setTimeout(() => resolve(_jobs), TIMEOUT)
    })
  }
}