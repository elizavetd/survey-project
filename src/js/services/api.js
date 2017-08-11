import _users from './users'
import _surveys from './surveys'
import _templates from './templates'

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
      setTimeout(() => resolve(_users), TIMEOUT)
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
  }
}