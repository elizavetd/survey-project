export const GET_JOBS = 'GET_JOBS'
export const RECEIVE_JOBS = 'RECEIVE_JOBS'

export function getJobs() {
	return {
		type: GET_JOBS
	}
}

export function receiveJobs(jobs) {
	return {
	type: RECEIVE_JOBS,
		payload: jobs
	}
}