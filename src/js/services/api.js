import _surveys from './surveys'
import _templates from './templates'

const TIMEOUT = 100;

export const api = {
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