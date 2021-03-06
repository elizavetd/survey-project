import { SubmissionError } from 'redux-form'
import { api } from '../services/api'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
	return api.addNewUser(values).then(
		result => sleep(100),
		error => {
				throw new SubmissionError({
					_error: error.message
			})
		}
	);
};

export default submit;