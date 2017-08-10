import _surveys from './surveys'

const TIMEOUT = 100;

export const api = {
  getUserSurveys() {
    return new Promise( resolve => {
      setTimeout(() => resolve(_surveys), TIMEOUT)
    })
  },

}