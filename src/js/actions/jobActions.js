export const GET_JOBS = 'GET_JOBS'
export const RECEIVE_JOBS = 'RECEIVE_JOBS'

export function getJobs() {
  return {
    type: GET_JOBS
  }
}

export function receiveJobs(JOBS) {
  return {
    type: RECEIVE_JOBS,
    payload: JOBS
  }
}
