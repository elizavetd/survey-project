import { SubmissionError } from 'redux-form'
import { api } from '../services/api'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
	return api.setCurrentUser(values).then(
		result => sleep(100),
		error => {
				throw new SubmissionError({
					//password: 'Пароль не совпадает',
					_error: error.message
			})
		}
	);
};

export default submit;